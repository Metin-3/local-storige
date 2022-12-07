const inputName = document.querySelector("#name");
const inputUsername = document.querySelector("#username");
const inputAge = document.querySelector("#age");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

const spanName = document.querySelector(".span-name");
const spanUsername = document.querySelector(".span-username");
const spanAge = document.querySelector(".span-age");
const spanEmail = document.querySelector(".span-email");
const spanPassword = document.querySelector(".span-password");

const btnSubmit = document.querySelector(".submit");

const togglePassword = document.querySelector(".eye");

let arr = [

];

togglePassword.addEventListener('click', function (e) {

    const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPassword.setAttribute('type', type);
});


inputName.addEventListener("keyup", nameFunc);
inputUsername.addEventListener("keyup", nameFunc);
inputAge.addEventListener("keyup", nameFunc);
inputEmail.addEventListener("keyup", nameFunc);
inputPassword.addEventListener("keyup", nameFunc);

function nameFunc() {
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('username', inputUsername.value);
    localStorage.setItem('age', inputAge.value);
    localStorage.setItem('email', inputEmail.value);
    localStorage.setItem('password', inputPassword.value);
};

inputName.addEventListener("keyup", () => {
    if (inputName.value.trim() == "") {
        spanName.innerText = "invalid name";
        spanName.style.color = "red";
        inputName.style.borderColor = "red";
        return false;
    } else {
        spanName.innerText = ""
        inputName.style.borderColor = "white";
        return true;
    }
});


inputUsername.addEventListener("keyup", () => {
    if (inputUsername.value.trim() == "") {
        spanUsername.innerText = "invalid usuername";
        spanUsername.style.color = "red";
        inputUsername.style.borderColor = "red";
        return false;
    } else {
        spanUsername.innerText = ""
        inputUsername.style.borderColor = "white";
        return true;
    }
});

inputAge.addEventListener("keyup", () => {
    if ((inputAge.value < 10) || (inputAge.value > 100)) {
        spanAge.innerText = "invalid age";
        spanAge.style.color = "red";
        inputAge.style.borderColor = "red";
        return false;
    } else {
        spanAge.innerText = "";
        inputAge.style.borderColor = "white";
        return true;
    }
});

inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value.trim() == "") {
        spanEmail.innerText = "invalid email";
        spanEmail.style.color = "red";
        inputEmail.style.borderColor = "red";
        return false;
    } else {
        spanEmail.innerText = ""
        inputEmail.style.borderColor = "white";
        return true;
    }
});

inputPassword.addEventListener("keyup", () => {
    if (inputPassword.value.trim() == "") {
        spanPassword.innerText = "invalid password";
        spanPassword.style.color = "red";
        inputPassword.style.borderColor = "red";
        return false;
    } else {
        spanPassword.innerText = ""
        inputPassword.style.borderColor = "white";
        return true;
    }
});

btnSubmit.addEventListener("click", () => {

    arr.push.localStorage.getItem("name", "inputName");
    arr.push.localStorage.getItem("username", "inputUsername");
    arr.push.localStorage.getItem("age", "inputAge");
    arr.push.localStorage.getItem("email", "inputEmail");
    arr.push.localStorage.getItem("passord", "inputPassword");
    console.log(arr);
});