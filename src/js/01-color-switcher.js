function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let timerId = null;

startButton.addEventListener('click', event => {
  timerId = setInterval(() => {
    event.target.setAttribute('disabled', 'disabled');
    let colorFull = getRandomHexColor();
    document.querySelector('body').style.backgroundColor = colorFull;
  }, 1000);
});

stopButton.addEventListener('click', event => {
  clearInterval(timerId);
});
