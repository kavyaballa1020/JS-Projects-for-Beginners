let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
}

let searchIcon = document.querySelector(".bx-search");

searchIcon.onclick = function () {
    sidebar.classList.toggle("active");
}
