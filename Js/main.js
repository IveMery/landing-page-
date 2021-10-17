const menuHamburger = document.querySelector(".menu-hamburger")
const menuResponsive = document.querySelector(".nav-content")
const logoMobile = document.querySelector(".logo-mobile")
const logo = document.querySelector(".logo")
const body = document.querySelector(".body")

menuHamburger.onclick = () => {
    menuResponsive.classList.toggle("show")
    logoMobile.classList.toggle("hidden")
    body.classList.toggle("no-scroll")

}

