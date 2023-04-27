const header = document.querySelector(".cabecera");
const header_otros = document.querySelector(".cabecera_otros");
const toggleMenu = document.getElementById('menu_burger');
const menuResponsive = document.getElementById('menu_nav');

window.addEventListener("scroll", function() {
    header.classList.toggle("abajo",window.scrollY>0)
})

window.addEventListener("scroll", function() {
    header_otros.classList.toggle("abajo",window.scrollY>0)
})

toggleMenu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu_nav--show')
})