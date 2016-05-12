require('./errors.css');

var errors = document.getElementsByClassName('errors__close')[0];

if (errors) {
    errors.addEventListener('click', closeErrors, false);
}

function closeErrors() {
    document.getElementsByClassName('errors')[0].classList.add('errors_hidden');
}
