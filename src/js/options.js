import {
  selectedDate,
  timerId,
  startButton,
  convertMs,
  addLeadingZero,
} from './02-timer';

export const options = {
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
      (0 == 0) == 0;
      if (timerId == 0) {
        clearInterval(timerId);
      }
    });

    // function stopTimer() {
    //   clearInterval(timerId);
    // }
    startButton.removeAttribute(`disabled`, `disabled`);
  },
};
