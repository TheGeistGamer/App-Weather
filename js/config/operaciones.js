// Genera un indice por cada peticion
let container = 0;
export function indice() {
    return container += 1;
}


// ---- Operaciones de la logica ----
// Redondea el numero
export function redondear(num) {return Math.round(num)};


// --- Formatos ---


// Dar formato a la temperatura
export function tempFormat(str) {
    const covert = String(str);
    return covert + ' °';
}


// Dar formato a la humedad
export function percentFormat(str) {
    const convert = String(str);
    return convert + ' %';
}

// Dar formato a la precion
export function precionFormat(str) {
    const convert = String(str);
    return convert + ' hPa'
}

// Dar formato a la velocidad
export function kmFormat(str) {
    const convert = String(str * 3.6);
    const modif = redondear(convert);
    return modif + ' km/h';
}

// Dar formato a la visibilidad
export function visibilityFormat(str) {
    const convert = String(str / 1000);
    return redondear(convert) + ' km';
}

// Limpia el nombre del pais
export function cleanNameCity(str) {
    const convert = str.split(',');
    return convert[0]; 
}

// Ponder la primera letra en mayuscula
export function descriWeather(str = '') {
    let newStr = str.at(0).toUpperCase();

    for(let i = 1; i < str.length; i++) {
        newStr += str[i];
    }
    return newStr;
}

// Agrega un cero a un numero
function addZero(num = Number) {
    const numToString = String(num);

    if(numToString.length > 1) return num;
    else return '0' + String(num);
}


// Dar formato a la hora
export function cleanTime(str, indice = false) {

    if(indice) {
        const arr = str.split(':');

        const getCorrectTime = forecast_Time(arr[0]);
        const validacion = getCorrectTime.includes('a.m.');

        if(validacion) return `${+getCorrectTime[0]}:${arr[1]} a.m.`

        return `${+getCorrectTime[0]}:${arr[1]} p.m.`
    }

    const convert = str.split(' ');
    const newArr = convert[1].split(':');

    if(+newArr[0].at(0) == 0 ) return `${newArr[0]}:${newArr[1]} a.m.`;

    else if(+newArr[0] == 11 || +newArr[0] == 10) return `${newArr[0]}:${newArr[1]} a.m.`;
    else if(+newArr[0] == 12 ) return `${newArr[0]}:${newArr[1]} p.m.`;
    return `${newArr[0] - 12}:${newArr[1]} p.m.`;
}


export function transformDate(obj) {
    const rise = obj.sunrise;
    const down = obj.sunset;

    const dateRise = new Date(rise * 1000); 
    const dateDown = new Date(down * 1000);

    return {
        sunrise: `${forecast_Time(detectTimeZone(dateRise, obj.gmt), 'Solo numero')}:${addZero(dateRise.getUTCMinutes())} a.m.`,
        sunset: `${forecast_Time(detectTimeZone(dateDown, obj.gmt), 'Solo numero')}:${addZero(dateDown.getUTCMinutes())} p.m.` 
    }
}


// Parte del formato de hora de las card del carrusel
export function cleanForecast(obj, gmt) {
    const clean = obj.map(val => {

        return {
            time: forecastDate(val.dt, gmt),
            temp: tempFormat( redondear(val.main.temp) ),
            state: val.weather[0].description
        }
    })
    return clean;
}


function forecastDate(date, gmt) {
    const time_forecast = new Date(date * 1000);
    return forecast_Time(detectTimeZone(time_forecast, gmt));
}


function detectTimeZone(forecast, gmt) {
    if(gmt < 0) {
        const zonaHoraria = (forecast.getUTCHours());
        let agregarGMT = (zonaHoraria + 24) + gmt;

        if(agregarGMT > 24) {
            return agregarGMT - 24;

        }else {
            return agregarGMT;
        }
        
    }else if(gmt > 0) {
        return forecast.getUTCHours() + gmt;
    }
    else {
        return forecast.getUTCHours();
    }
}


function forecast_Time(dateGMT,raw = null) {
    if(raw) {
        if( 1 <= dateGMT && dateGMT < 12 ) return `${dateGMT}`;
        else if( dateGMT == 24 ) return `${dateGMT - 12}`;
        else if( dateGMT == 12 ) return `${dateGMT}`;
        else if(13 <= dateGMT && dateGMT < 24) return `${dateGMT - 12}`;
        else if(dateGMT <= 25) return `${dateGMT - 24}`
        else if( dateGMT == 0) return `${dateGMT + 12}`;
        else return `${dateGMT - 24}`;

    } else {
        if( 1 <= dateGMT && dateGMT < 12 ) return `${dateGMT} a.m.`;
        else if( dateGMT == 24 ) return `${dateGMT - 12} a.m.`;
        else if( dateGMT == 12 ) return `${dateGMT} p.m.`;
        else if(13 <= dateGMT && dateGMT < 24) return `${dateGMT - 12} p.m.`;
        else if(dateGMT == 0) return `${dateGMT + 12} a.m.`;
        else if(dateGMT <= 25) return `${dateGMT - 24} p.m.`
        else return `${dateGMT - 24} a.m.`;
    }   
}