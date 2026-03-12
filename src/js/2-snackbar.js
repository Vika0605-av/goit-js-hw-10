
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

function createSnackbar(message, delay, isPositive) {
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        if (isPositive) {
    res(message);
        } else {
            rej(message);
        }
}, delay);
});
return promise;
}
const delay = 2000;
const promise1 = createSnackbar(`✅ Fulfilled promise in ${delay}ms`, delay, true);
promise1.then(value => {
})
.catch(error => {
});

const promise2 = createSnackbar(`❌ Rejected promise in ${delay}ms`, delay, false);
promise1.then(value => {
})
.catch(error => {
});