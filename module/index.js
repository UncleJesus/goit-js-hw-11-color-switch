'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomBackgroundColor = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      updateClockface();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener(
  'click',
  randomBackgroundColor.start.bind(randomBackgroundColor),
);

refs.stopBtn.addEventListener(
  'click',
  randomBackgroundColor.stop.bind(randomBackgroundColor),
);

function updateClockface() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const min = 0;
  const max = colors.length - 1;
  const randomId = randomIntegerFromInterval(min, max);

  refs.body.style.backgroundColor = colors[randomId];
}
