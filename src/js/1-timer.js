import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"

const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let userSelectedDate = null;
let  intervalId;
startBtn.disabled = true;
startBtn.addEventListener('click', () => {
    intervalId = setInterval (() => {
        const futureTime = new Date();
        const diff = userSelectedDate - futureTime;
        if (diff <= 0) {
            clearInterval(intervalId);
            return;
        }
   function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
   }
 }, 1000);
});