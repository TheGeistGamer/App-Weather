const _titulo = document.getElementById('city');
const _temp = document.getElementById('temp');
const _max_min = document.getElementById('max-min');
const _estado = document.getElementById('estado');

const _presion = document.getElementById('presion');
const _humedad = document.getElementById('humedad');
const _sensacion = document.getElementById('sensacion');

const _visibilidad = document.getElementById('visibilidad');
const _viento = document.getElementById('viento');

const _sunrise = document.getElementById('sunrise');
const _sunset = document.getElementById('sunset');

// card de calidad
const _estadoCalidad = document.getElementById('estadoCalidad');
const _infoCalidad = document.getElementById('infoCalidad');
const _barraCalidad = document.getElementById('calidad');
let old = 'inicio';

export default function dashboard (obj) {
    const [clima, pollution, forecast, time] = obj;

    const {city, info_matriz, temperatura, viento, visibilidad} = clima;
    const {description, main} = pollution;
    const {sunrise, sunset} = time;


    // --- Main Info ---
    _titulo.innerHTML = city.name;
        _temp.innerHTML = temperatura.temp;
            _max_min.innerHTML = `${temperatura.temp_max} / ${temperatura.temp_min}`;
                _estado.innerHTML = city.estado;

    
    // --- Matriz de informacion ---
    _presion.innerHTML = info_matriz.precion;
        _humedad.innerHTML = info_matriz.humedad;
            _sensacion.innerHTML = info_matriz.sensacion;
    
        _visibilidad.innerHTML = visibilidad;
            _viento.innerHTML = viento;

                _sunrise.innerHTML = sunrise
                _sunset.innerHTML = sunset

                
    // Card de Calidad
    _estadoCalidad.innerHTML = main.title;
        _infoCalidad.innerHTML = description;
            _barraCalidad.classList.replace(old, main.barra)
            old = main.barra;
}

