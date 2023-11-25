let hamburger = document.querySelector("#hamburger");
let sideMenu = document.querySelector("#side-menu");

hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle(".open");
})