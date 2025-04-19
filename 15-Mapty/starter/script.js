'use strict';



// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


// const workout = `<h2 class="workout__title">Running on April 14</h2>
//           <div class="workout__details">
//             <span class="workout__icon">🏃‍♂️</span>
//             <span class="workout__value">5.2</span>
//             <span class="workout__unit">km</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">⏱</span>
//             <span class="workout__value">24</span>
//             <span class="workout__unit">min</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">⚡️</span>
//             <span class="workout__value">4.6</span>
//             <span class="workout__unit">min/km</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">🦶🏼</span>
//             <span class="workout__value">178</span>
//             <span class="workout__unit">spm</span>
//           </div>
//         </li>`



navigator.geolocation.getCurrentPosition(function(position) {
  const {latitude, longitude} = position.coords;
  console.log(latitude, longitude);
  console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D`);
  const coords = [latitude, longitude];
  const map = L.map('map').setView(coords, 13);

  // map.on('click', renderWorkout())
  // function onMapClick(e) {
  //     alert("You clicked the map at " + e.latlng);
  // }
  // function renderWorkout(e) {
  //   form.classList.toggle('hidden');
  // }

  // map.on('click', renderWorkout);


  L.tileLayer('https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/">Humanitarian OpenStreetMap Team</a>'
  }).addTo(map);

  L.marker(coords).addTo(map)
  .bindPopup('A Pretty CSS popup.<br> Easily customizable.')
  .openPopup();
}, function() {
  alert('Could not get your position')
})



// const popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent('You clicked the map at ' + e.latlng.toString())
//     .openOn(map);
// }
// map.on('click', onMapClick);