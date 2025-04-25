'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const clearButton = document.querySelector('.sidebar__btn');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDay()}`;
  }

  _setCoords(coords) {
    this.coords = coords;
  }

  _setDisance(distance) {
    this.distance = distance;
  }

  _setDuration(duration) {
    this.duration = duration;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }

  _setCadence(cadence) {
    this.cadence = cadence;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
  _setCoords(elevationGain) {
    this.elevationGain = elevationGain;
  }
}

class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 13;
  #markers;
  #markerByWorkoutId = {};

  constructor() {
    // get users position
    this._getPosition();

    // get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    clearButton.addEventListener('click', this.reset);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/">Humanitarian OpenStreetMap Team</a>',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
    this.#markers = L.layerGroup().addTo(this.#map);
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest(`.form__row`).classList.toggle('form__row--hidden');
    inputCadence.closest(`.form__row`).classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) => inputs.every(el => Number.isFinite(el));
    const allPositive = (...inputs) => inputs.every(el => el > 0);
    // Add Workout marker to map on submit
    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const duration = +inputDuration.value;
    const distance = +inputDistance.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // Check if data is valid
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(duration, distance, cadence) ||
        !allPositive(duration, distance, cadence)
      )
        return alert('Inputs have to be positive numbers.');
      // if (distance < 0)
      // if activity running, create running object
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    if (type === 'cycling') {
      const elevationGain = +inputElevation.value;
      if (
        !validInputs(duration, distance, elevationGain) ||
        !allPositive(duration, distance)
      )
        return alert('Inputs have to be positive numbers.');
      // if cycling create cycling object
      workout = new Cycling([lat, lng], distance, duration, elevationGain);
    }
    // add new object to workout array
    this.#workouts.push(workout);

    // render workout on map as marker
    this._renderWorkoutMarker(workout);
    // render workout on list
    this._renderWorkout(workout);

    // clear input fields
    this._hideForm();

    // set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    const marker = L.marker(workout.coords)
      .bindPopup(
        L.popup({
          maxwidth: 250,
          minWidtth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      );

    marker.addTo(this.#markers).openPopup();
    this.#markerByWorkoutId[workout.id] = marker;
  }

  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id=${workout.id}>

          <h2 class="workout__title">${workout.description}
          <button id="btn--edit-${workout.id}">Edit</button>
          <button id="btn--close-${workout.id}">X</button>
          
          </h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;
    if (workout.type === 'running') {
      html += `
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence.toFixed(
                  1
                )}</span>
                <span class="workout__unit">spm</span>
              </div>
            `;
    }
    if (workout.type === 'cycling') {
      html += `
            <div class="workout__details">
              <span class="workout__icon">⚡️</span>
              <span class="workout__value">1${workout.speed.toFixed(1)}6</span>
              <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⛰</span>
              <span class="workout__value">${workout.elevationGain}</span>
              <span class="workout__unit">m</span>
            </div>
          `;
    }

    // --- CHANGED: Inline edit fields (hidden by default) ---
    html += `
      <div class="workout__edit-fields hidden">
        <!-- Added editable distance field -->
        <input class="edit__distance" type="number" value="${
          workout.distance
        }" />
        <!-- Added editable duration field -->
        <input class="edit__duration" type="number" value="${
          workout.duration
        }" />
        <!-- Added cadence OR elevation based on type -->
        ${
          workout.type === 'running'
            ? `<!-- Running: editable cadence field -->\n        <input class="edit__cadence" type="number" value="${workout.cadence}" />`
            : `<!-- Cycling: editable elevation field -->\n        <input class="edit__elevation" type="number" value="${workout.elevationGain}" />`
        }
        <!-- Added Save button -->
        <button class="btn--save" data-id="${workout.id}">Save</button>
      </div>
    </li>
    `;

    console.log(html);
    form.insertAdjacentHTML('afterend', html);
    document
      .getElementById(`btn--close-${workout.id}`)
      .addEventListener('click', this._removeWorkout.bind(this));

    document
      .getElementById(`btn--edit-${workout.id}`)
      .addEventListener('click', this._editWorkout.bind(this));

    document
      .querySelector(`.btn--save[data-id="${workout.id}"]`)
      .addEventListener('click', this._saveWorkoutEdit.bind(this));
  }

  _editWorkout(e) {
    const workoutEl = e.target.closest('.workout');
    workoutEl.classList.toggle('selected');
    console.log(workoutEl);
    workoutEl.querySelector('.workout__edit-fields').classList.toggle('hidden');
  }

  _saveWorkoutEdit(e) {
    const id = e.target.dataset.id;
    const workout = this.#workouts.find(w => w.id === id);
    const workoutEl = document.querySelector(`.workout[data-id="${id}"]`);
  
    // Read updated values
    const distance = +workoutEl.querySelector('.edit__distance').value;
    const duration = +workoutEl.querySelector('.edit__duration').value;
  
    if (workout.type === 'running') {
      const cadence = +workoutEl.querySelector('.edit__cadence').value;
      workout._setDisance(distance);
      workout._setDuration(duration);
      workout._setCadence(cadence);
      workout.calcPace();
    } else {
      const elevation = +workoutEl.querySelector('.edit__elevation').value;
      workout._setDisance(distance);
      workout._setDuration(duration);
      workout._setCoords(elevation);
      workout.calcSpeed();
    }
  
    // Update description
    workout._setDescription();
  
    // Build updated HTML (preserves list position)
    const updatedHTML = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">
          ${workout.description}
          <button id="btn--edit-${workout.id}">Edit</button>
          <button id="btn--close-${workout.id}">X</button>
        </h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        ${
          workout.type === 'running'
            ? `<div class="workout__details"><span class="workout__icon">⚡️</span><span class="workout__value">${workout.pace.toFixed(
                1
              )}</span><span class="workout__unit">min/km</span></div><div class="workout__details"><span class="workout__icon">🦶🏼</span><span class="workout__value">${workout.cadence.toFixed(
                1
              )}</span><span class="workout__unit">spm</span></div>`
            : `<div class="workout__details"><span class="workout__icon">⚡️</span><span class="workout__value">${workout.speed.toFixed(
                1
              )}</span><span class="workout__unit">km/h</span></div><div class="workout__details"><span class="workout__icon">⛰</span><span class="workout__value">${workout.elevationGain}</span><span class="workout__unit">m</span></div>`
        }
        <div class="workout__edit-fields hidden">
          <input class="edit__distance" type="number" value="${workout.distance}" />
          <input class="edit__duration" type="number" value="${workout.duration}" />
          ${
            workout.type === 'running'
              ? `<input class="edit__cadence" type="number" value="${workout.cadence}" />`
              : `<input class="edit__elevation" type="number" value="${workout.elevationGain}" />`
          }
          <button class="btn--save" data-id="${workout.id}">Save</button>
        </div>
      </li>
    `;
  
    // Swap it in place
    workoutEl.outerHTML = updatedHTML;
  
    // Reattach listeners
    const newEl = document.querySelector(`.workout[data-id="${id}"]`);
    newEl.querySelector(`#btn--close-${id}`).addEventListener('click', this._removeWorkout.bind(this));
    newEl.querySelector(`#btn--edit-${id}`).addEventListener('click', this._editWorkout.bind(this));
    newEl.querySelector(`.btn--save[data-id="${id}"]`).addEventListener('click', this._saveWorkoutEdit.bind(this));
  
    // Persist
    this._setLocalStorage();
  }
  

  _toggleEditBackground(workoutEl) {
    workoutEl.classList.toggle('selected');
    console.log(workoutEl);
  }

  _removeWorkout(e) {
    // onsole.log(e);
    const workout = e.target.closest('.workout');
    const workoutID = workout.dataset.id;
    this.#workouts.splice(
      this.#workouts.findIndex(work => work.id === workoutID),
      1
    );
    this._removeWorkoutMarker(workoutID);
    workout.remove();
    this._setLocalStorage();
  }

  _removeWorkoutMarker(workoutId) {
    this.#markers.removeLayer(this.#markerByWorkoutId[workoutId]);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    // console.log(workoutEl);
    if (!workoutEl) return;

    const workout = this.#workouts.find(
      workout => workout.id === workoutEl.dataset.id
    );

    if (!workout) return;
    this.#markerByWorkoutId[workout.id].openPopup();
    const coords = workout.coords;
    this.#map.setView(coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 0.5,
      },
    });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    // new Running([lat, lng], distance, duration, cadence);

    // new Cycling([lat, lng], distance, duration, elevationGain);
    // console.log(data);

    if (!data) return;

    this.#workouts = data.map(work => {
      if (work.type === 'running') {
        return new Running(
          work.coords,
          work.distance,
          work.duration,
          work.cadence
        );
      }
      if (work.type === 'cycling') {
        return new Cycling();
        work.coords, work.distance, work.duration, work.elevationGain;
      }
    });

    // this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}
const app = new App();
