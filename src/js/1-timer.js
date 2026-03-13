

// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
const startBtn = document.querySelector('button[data-start]');
const  input = document.querySelector('#datetime-picker');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let userSelectedDate = null;
let  intervalId;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (selectedDates[0] <= new Date()) {
      startBtn.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight'
      });
    } else {
      startBtn.disabled = false;
    }
    console.log(selectedDates[0]);
  },
  };
  flatpickr(input, options);
startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  input.disabled = true;
    intervalId = setInterval (() => {
        const futureTime = new Date();
        const diff = userSelectedDate - futureTime;
        if (diff <= 0) {
            clearInterval(intervalId);
              days.textContent = '00';
              hours.textContent = '00';
              minutes.textContent = '00';
              seconds.textContent = '00';
            input.disabled = false;
            return;
        }
        const time = convertMs(diff);
        days.textContent = addLeadingZero(time.days);
        hours.textContent = addLeadingZero(time.hours);
        minutes.textContent = addLeadingZero(time.minutes);
        seconds.textContent = addLeadingZero(time.seconds);
      }, 1000);
    });
   function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor(((ms % day) % hour) / minute),
    seconds: Math.floor((((ms % day) % hour) % minute) / second),
  };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
  