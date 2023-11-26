let hamburger = document.querySelector("#hamburger");
let sideMenu = document.querySelector(".side-menu");
let firstLine = document.querySelector(".firstLine");
let secondLine = document.querySelector(".secondLine");
let thirdLine = document.querySelector(".thirdLine");

hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    firstLine.classList.toggle('rotate45');
    secondLine.classList.toggle('hidden');
    thirdLine.classList.toggle('rotate315');
})