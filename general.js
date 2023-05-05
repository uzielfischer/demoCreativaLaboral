const header = document.querySelector(".cabecera");
const toggleMenu = document.getElementById('menu_burger');
const menuResponsive = document.getElementById('menu_nav');

window.addEventListener("scroll", function() {
    header.classList.toggle("abajo",window.scrollY>0)

<<<<<<< HEAD
window.addEventListener("scroll",function(){
    header_otros = document.toggle("abajo",window.screenY>0)
=======
>>>>>>> parent of af1518a (Se realziaron algunos cambios de estilos en el index con el color de fonde los servicios y del contacto, se cambio los efectos de color del nav de las demas secciones.)
})

toggleMenu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu_nav--show')
})