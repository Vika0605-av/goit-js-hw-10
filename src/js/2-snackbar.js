
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
const promise1 = createSnackbar(`✅ Fulfilled promise in ${1000}ms`, 1000, true);
const promise2 = createSnackbar(`❌ Rejected promise in ${1000}ms`, 1000, false);