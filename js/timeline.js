import iconWeather from "./class/IconWeather";

export default function timeline(arr) {
    const tl = document.getElementById('carrusel');
    tl.innerHTML = '';              

    arr.forEach(element => {            // Empujamos todas las cards al carrusel
        const icono = iconWeather(element.state, element.time);
        const feature = document.createElement('div');
        feature.classList.add('card');

        let container = `
            <div class="hora-titulo"><p>${element.time}</p></div>
            <div class="img-estado">${icono}</div>
            <div class="temp"><p>${element.temp}</p></div>
        `;
        
        feature.innerHTML = container;

        tl.appendChild(feature);  // Renderizamos
    })
}