import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('input');
const startButton = document.querySelector('[data-start]');
startButton.setAttribute(`disabled`, `disabled`);
let selectedDate = null;
let timerId = null;

const selector = document.querySelector('#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    clearInterval(timerId);

    if (selectedDate <= new Date()) {
      window.alert(`Please choose a date in the future`);
      startButton.setAttribute(`disabled`, `disabled`);
      return;
    }

    startButton.addEventListener('click', event => {
      console.log(selectedDate);
      timerId = setInterval(() => {
        let final = convertMs(selectedDate - new Date());
        document.querySelector(`[data-seconds]`).innerText = addLeadingZero(
          final.seconds
        );
        document.querySelector(`[data-minutes]`).innerText = addLeadingZero(
          final.minutes
        );
        document.querySelector(`[data-hours]`).innerText = addLeadingZero(
          final.hours
        );
        document.querySelector(`[data-days]`).innerText = addLeadingZero(
          final.days
        );
        console.log(final);
      }, 1000);
    });

    startButton.removeAttribute(`disabled`, `disabled`);
  },
};

function addLeadingZero(value) {
  return `${value}`.padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(selector, options);
