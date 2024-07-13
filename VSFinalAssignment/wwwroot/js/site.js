// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// script.js
const title = document.querySelector('h1');

function animateTitle() {
    title.style.color = 'blue';
    setTimeout(() => {
        title.style.color = 'red';
    }, 1000);
}

animateTitle();