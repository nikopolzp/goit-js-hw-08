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
   elem.preventDefault(); // отмена обновления страницы
    console.log({ email: email.value, message: message.value });
    //вывод в консоль значений
    form.reset();
//очистка полей формы
    localStorage.removeItem(STORAGE_KEY);
// очистка хранилища
});

const load = key => {
    tru 
    {
        const serializedState = localStorage.getItem(key);
        // localStorage.getItem() - возвращает значение ключа 
        //если его нет null
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error)
    {
    console.error('Get state error: ', error.message);
  }
};
        
const storage = load(STORAGE_KEY);
if (storage) {
  email.value = storage.email;
  message.value = storage.message;
}





