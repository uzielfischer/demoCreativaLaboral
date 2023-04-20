const header = document.querySelector(".contedor_cabecera");
const toggleMenu = document.getElementById('menu_burger');
const menuResponsive = document.getElementById('menu_nav');

window.addEventListener("scroll", function() {
    header.classList.toggle("abajo",window.scrollY>0)

})

toggleMenu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu_nav--show')
})