const navToggle = document.querySelector(".nav-toggle");
const navToggleAside = document.querySelector('.nav-toggle-Aside');

const btn = document.querySelector('.showNavbarAside');

const navMenu = document.querySelector('.buscar');
const menu = document.querySelector('.dashboard');

const screenWidth = screen.width;

if(screenWidth <= 425) {
    navToggleAside.addEventListener("click", () => {
        navMenu.classList.toggle("ocultar");
        menu.classList.toggle('ocultar_dashboard')
    });

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("ocultar");
        menu.classList.toggle('ocultar_dashboard');
    });

}else if(screenWidth > 425 && screenWidth <= 768) {
    navToggleAside.classList.toggle('ocultar');

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("ocultar");
    });

}else if(1024 == screenWidth){
    btn.classList.add('ocultar')
    console.log(btn);
}
