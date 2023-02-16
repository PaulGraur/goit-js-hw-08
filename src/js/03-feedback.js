import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const saveValue = localStorage.getItem(STORAGE_KEY);
const saveDataObject = JSON.parse(saveValue);

const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`.feedback-form input`),
  textarea: document.querySelector(`.feedback-form textarea`),
}

refs.form.addEventListener('input', throttle(storageFormData));
refs.form.addEventListener('submit', throttle(onFromSubmit));

reloadPage();

function storageFormData(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFromSubmit(event) {
  event.preventDefault();

  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(saveData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function reloadPage() {
  if (saveValue) {
    refs.input.value = saveDataObject.email || '';
    refs.textarea.value = saveDataObject.message || '';
  }
}