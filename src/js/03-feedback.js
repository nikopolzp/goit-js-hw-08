import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault(); // отмена обновления страницы
    console.log({ email: email.value, message: message.value });
     //вывод в консоль значений
    form.reset();
    //очистка полей формы
    localStorage.removeItem(LOCALSTORAGE_KEY);
    // очистка хранилища
});

const load = key => {
  try {
      const serializedState = localStorage.getItem(key);
        // localStorage.getItem() - возвращает значение ключа 
        //если его нет null
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}