
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;
    createPromise(delay, state === 'fulfilled')
        .then(message => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`
            });
        })
        .catch(delay => {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`
            });
        });
    });
function createSnackbar(delay, shouldResolve) {
const promise = new Promise((res, rej) => {
return new Promise((res, rej) => {
    setTimeout(() => {
        shouldResolve ? resolve(delay) : reject(delay);
    }, delay);
    });
});
}