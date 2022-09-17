import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener("input", throttle(onTextinput, 500));
form.addEventListener("submit", onSubmit)

populateText();

function onTextinput(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onSubmit(evt) {
    evt.preventDefault();

    console.log("Отправляем форму");
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateText() {
    let savedMessage = localStorage.getItem(STORAGE_KEY);
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage);
        email.value = savedMessage.email;
        message.value = savedMessage.message;
    }

};

