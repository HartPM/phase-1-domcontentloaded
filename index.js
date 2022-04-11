const ptag = document.querySelector('#text');


document.addEventListener('DOMContentLoaded', beLoaded);

function beLoaded (e) {
    return ptag.textContent = "This is really cool!"
}