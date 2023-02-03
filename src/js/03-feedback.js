import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const masseqe = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(elem =>
{
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectToSave));
}, 500));

form.addEventListener('submit', elem => {
   elem.preventDefault();
console.log({ email: email.value, message: message.value });
form.reset();
localStorage.removeItem(STORAGE_KEY);
});




