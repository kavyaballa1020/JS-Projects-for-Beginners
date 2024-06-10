// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const sidenav = document.querySelector(".sidenav");

    toggleBtn.addEventListener("click", function() {
        sidenav.classList.toggle("collapsed");
    });
});
