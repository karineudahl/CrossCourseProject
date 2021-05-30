const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#lastNameError");
const streetAdress = document.querySelector("#street-adress"); 
const streetAdressError = document.querySelector("#streetAdressError");
const zipCode = document.querySelector("#zip-code"); 
const zipCodeError = document.querySelector("#ZipCodeError"); 
const town = document.querySelector("#town");
const townError = document.querySelector("#townError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError"); 
const messageSuccess = document.querySelector("#messageSucess");
 
function validateForm() { 
    event.preventDefault(); 

    if(checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if(checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if(checkLength(streetAdress.value, 0) === true) {
        streetAdressError.style.display = "none";
    } else {
        streetAdressError.style.display = "block";
    }

    if(checkLength(zipCode.value, 0) === true) {
        zipCodeError.style.display = "none";
    } else {
        zipCodeError.style.display = "block";
    }

    if(checkLength(town.value, 0) === true) {
        townError.style.display = "none";
    } else {
        townError.style.display = "block";
    }

    if(checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
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
    if(checkLength(firstName.value, 0) && checkLength(lastName.value, 0) && checkLength(streetAdress.value, 0) && checkLength(zipCode.value, 0) && checkLength(town.value, 0) && checkEmail(email.value) ) {
        messageSuccess.innerHTML = `<div class="message-success">
                                        <p>Thank you for your order!</p>
                                    </div>`;
        form.reset();
    }
}

form.addEventListener("submit", messageSubmit);