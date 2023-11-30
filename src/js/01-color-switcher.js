function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let timerId = null;

startButton.addEventListener('click', event => {
  timerId = setInterval(() => {
    let colorFull = getRandomHexColor();
    document.querySelector('body').style.backgroundColor = colorFull;
    startButton.setAttribute(`disabled`, `disabled`);
    stopButton.removeAttribute(`disabled`, `disabled`);
  }, 1000);
});

stopButton.addEventListener('click', event => {
  clearInterval(timerId);
  startButton.removeAttribute(`disabled`, `disabled`);
  stopButton.setAttribute(`disabled`, `disabled`);
});
