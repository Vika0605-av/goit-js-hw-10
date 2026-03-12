
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;
    createSnackbar(delay, state === 'fulfilled')
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
function createSnackbar(message, delay, shouldResolve) {
return new Promise((res, rej) => {
    setTimeout(() => {
        if (shouldResolve) {
            res(message);
        }else {
            rej(message);
        }
    }, delay);
    });
}