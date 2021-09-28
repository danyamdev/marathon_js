const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 10;
let count = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.dataset.time);
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    count++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time)
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счет: <span class="primary">${count}</span></h1>`;
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    current = (time < 10) ? `0${current}`: current;
    setTime(current)
  }
}

function setTime(value) {
  timeEl.textContent = `00:${value}`;
}

function createRandomCircle() {
  const circle = document.createElement('div');

  const size = getRandomNumber(10, 60);
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `linear-gradient(90deg, ${getRandomColor()} 0%, ${getRandomColor()} 47%, ${getRandomColor()} 100%)`;

  board.append(circle)
}

function getRandomNumber(min, max) {
  let rand =  min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getRandomColor() {
  let rgb = [];

  for (let i = 0; i < 3; i++) {
    rgb.push(getRandomNumber(0, 255));
  }

  return `rgb(${rgb.join()})`;
}