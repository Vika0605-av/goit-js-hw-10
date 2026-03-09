import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let  intervalId;
startBtn.addEventListener('click', () => {
    const initTime = new Date( '2026-08-25 09:00:00');
    intervalId = setInterval (() => {
        const futureTime = new Date();
        const diff = initTime - futureTime;
        const str = msToTime(diff);
        if (diff <= 0) {
            clearInterval(intervalId);
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
    },1000);
});