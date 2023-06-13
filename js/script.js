"use strict"


let burger = document.querySelector(".hamburger-menu")
let headerNav = document.querySelector(".header__nav")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    headerNav.classList.toggle("active")
    document.body.classList.toggle('clipped')
})

