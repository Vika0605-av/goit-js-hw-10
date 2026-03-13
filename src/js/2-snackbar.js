
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;
    const shouldResolve = state === 'fulfilled';
     createSnackbar(delay, shouldResolve)
        .then(message => {
            iziToast.success({
                messag: message,
                position: 'topRight',
            });
        })
        .catch(message => {
            iziToast.success({
                messag: message,
                position: 'topRight',
            });
        });
        form.res();
    });
    function createSnackbar(delay, shouldResolve) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (shouldResolve) {
                    res (`✅ Fulfilled promise in ${delay}ms`);
                } else {
                    rej (`❌ Rejected promise in ${delay}ms`)
                }
            }, delay);
        });
    }