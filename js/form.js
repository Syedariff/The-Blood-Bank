// when click arrow to signup and login

let arrow = document.querySelector('.pull'),
    logContainer = document.getElementById('log_container');

arrow.addEventListener("click", function() {
    logContainer.style.display = "flex";
});

// form validation
let password = document.getElementById('password'),
    confirmPassword = document.getElementById('confirm-password'),
    eyeIcon = document.querySelector('.inputbox i'),
    errorText = document.querySelector('.inputbox small'),
    form = document.getElementById('form');

// focus input to show the icon visible
function iconShow(el) {
    eyeIcon.style.display = "inline-block";
}

// click icon for password visible
eyeIcon.addEventListener('click', function() {
    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
        eyeIcon.setAttribute("class", "far fa-eye-slash");
    } else {
        password.type = "password";
        confirmPassword.type = "password";
        eyeIcon.setAttribute("class", "far fa-eye");
    }
});

// validation happens when user clicks the submit button
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // check password value and check password value
    if (password.value !== confirmPassword.value) {
        errorText.style.display = "block";
        errorText.innerHTML = "Password does not match!";
    } else {
        errorText.style.display = "none";
    }
});