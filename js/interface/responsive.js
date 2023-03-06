const navToggleAside = document.querySelector('.showNavbarAside');

const navMenu = document.querySelector('.buscar');
const menu = document.querySelector('.dashboard');

const screenWidth = screen.width;

// ----- Funciones de logica en el DOM -----
export default function displayDB() {

    if(screenWidth <= 425) {
        navToggleAside.classList.remove('ocultar');
        navMenu.classList.toggle('ocultar');
        menu.classList.toggle('ocultar_dashboard')
    }
    else if(screenWidth >= 634 && screenWidth < 1002) {
        menu.classList.remove('ocultar_dashboard');
        navMenu.classList.toggle('ocultar');
    }

    else if(screenWidth >= 1024) {
        menu.classList.remove('ocultar_dashboard');
    }
    return
}

