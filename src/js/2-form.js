
const formData = {
    email: '',
    message: ''
};

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const loadSavedData = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        if (parsedData.email) emailInput.value = parsedData.email;
        if (parsedData.message) messageTextarea.value = parsedData.message;


        formData.email = parsedData.email || '';
        formData.message = parsedData.message || '';
    }
};


feedbackForm.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);

        localStorage.removeItem(LOCAL_STORAGE_KEY);
        feedbackForm.reset();
        formData.email = '';
        formData.message = '';
    }
});

document.addEventListener('DOMContentLoaded', loadSavedData);