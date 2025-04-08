const nameInput = document.getElementById('name'); // renamed to avoid confusion
const confession = document.getElementById('feed');
const form = document.getElementById('confession_form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (event) => {
    let messages = [];

    if (nameInput.value.trim() === '' || confession.value.trim() === '') {
        messages.push('Name and confession are both required');
    }
if(email.value.length <5){
    messages.push('Email length should be more than 5 characters');
}

    if (messages.length > 0) {
        event.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});
