'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let answer = 0;
let highscore = 0;
let score = 20;
getRandomInt(1, 20);
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  answer = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('answer: ', answer);

const displayMessage = function(message) {
    document.querySelector('.message').textContent  = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === answer) {
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    console.log('score: ', score, 'highscore: ', highscore);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== answer) {
    if (score >= 1) {
        displayMessage(guess > answer ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.number').textContent = Number(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  getRandomInt(1, 20);
  score = 20;
  document.querySelector('body').style.background = '#222';
  document.querySelector('.score').textContent = score;
  console.log('answer: ', answer);
});
