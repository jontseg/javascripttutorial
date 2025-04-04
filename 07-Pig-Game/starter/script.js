'use strict';

let playerOneScore;
let playerZeroScore;
let curScore;
let player;
let scores;
let playing;
const winningScore = 10;
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const playerZeroCurrent = document.getElementById('current--0');
const playerOneCurrent = document.getElementById('current--1');
const playerZeroScoreCard = document.getElementById('score--0');
const playerOneScoreCard = document.getElementById('score--1');
const buttonRoll = document.querySelector('.btn--roll');
const buttonNew = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');


const checkWinner = () => {
  console.log('Check Winner');
  if (scores[player] >= winningScore) {
    document
      .querySelector(`.player--${player}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${player}`)
      .classList.add('player--winner');
    playing = false;
    dice.classList.add('hidden');
  } else {
    switchPlayer();
  }
}

const hold = () => {
  if (playing) {
    scores[player] += curScore;
    document.getElementById(`score--${player}`).textContent = scores[player];
    checkWinner();
  }
}

const setCurrentScore = () => {
  document.getElementById(`current--${player}`).textContent = curScore;
}

const rollDice = () => {
  if (playing) {
    dice.classList.remove('hidden');
    const roll = Math.trunc(Math.random() * 6) + 1;
    if (roll !== 1) {
      curScore += roll;
      setCurrentScore();
    } else {
      curScore = 0;
      setCurrentScore();
      switchPlayer();
    }
    dice.src = `dice-${roll}.png`;
  }
}

const resetGame = () => {
  player = 0;
  scores = [0, 0];
  curScore = 0;
  playerOneScoreCard.textContent = 0;
  playerZeroScoreCard.textContent = 0;
  playerOneCurrent.textContent = 0;
  playerZeroCurrent.textContent = 0;
  playerOne.classList.remove('player--active');
  playerZero.classList.add('player--active');
  playerOne.classList.remove('player--winner');
  playerZero.classList.remove('player--winner');
  init();
}


const init = () =>  {
  playerOneScore = 0;
  playerZeroScore = 0;
  curScore = 0;
  player = 0;
  scores = [0, 0];
  playing = true;
  dice.classList.add('hidden');
  playing = true;
}
buttonRoll.addEventListener('click', rollDice);
buttonNew.addEventListener('click', resetGame);
buttonHold.addEventListener('click', hold);
init();

const switchPlayer = () => {
  curScore = 0;
  document.getElementById(`current--${player}`).textContent = curScore;
  player = player === 0 ? 1 : 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
}








