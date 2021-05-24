const form = document.querySelector("#form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageSuccess = document.querySelector("#messageSucess");
 
function validateForm() {
    event.preventDefault(); 

    if(checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(message.value, 0) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function messageSubmit(event) {
    event.preventDefault(); 
    if(checkLength(name.value, 0) && checkEmail(email.value) && checkLength(message.value, 0)) {
        messageSuccess.innerHTML = `<div class="message-success">
                                        <p>Message sent.</p>
                                        <p>We will contact you as soon as possible.</p>
                                    </div>`;
        form.reset();
    }
}

form.addEventListener("submit", messageSubmit);