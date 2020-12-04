const hamburger = document.querySelector(".burgerjs");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function() {
    navbar.classList.toggle("slidein");
});