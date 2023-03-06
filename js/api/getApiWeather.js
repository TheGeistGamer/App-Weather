import procesos from "../../main";
import CleanInfoWeather from "../class/dataWeather";

// Hacer la peticiones a casa url y obtner sus objetos 
export default function getWeather(arr) {
    const lat = String(arr[0]);
    const lon = String(arr[1]);
    const nameCity = String(arr[2]);

    let urls = [
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=883a5f6c5c2bc1346b5f98a3724ff602&units=Metric&lang=sp`,    // Clima

        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=883a5f6c5c2bc1346b5f98a3724ff602`,                    // Contaminacion

        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=883a5f6c5c2bc1346b5f98a3724ff602&units=Metric&lang=sp`,   // Prediccion del clima

        `https://timezone.abstractapi.com/v1/current_time/?api_key=79badbb040c74f4bb72a661a313123a5&location=${lat},${lon}`                     // Tiempo
        ]   

    let request = urls.map(url => fetch(url));

    Promise.all(request)            // 0 = clima, 1 = contaminacion, 2 = predicion, 3 = timpo
    .then(responses => {
        for(let resp of responses ) {
            if(!resp.status == 200) {
                throw new Error(`Error de peticion, ${resp.status}`)
            }
        }
        return responses;
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(infoCity => {
        const clean = new CleanInfoWeather();

        infoCity[0].weather.city = nameCity; // Agregar al objeto, el nombre de la ciudad

        // Almacenar en el constructor
        clean.mainWeather(infoCity[0]);
        clean.pollution(infoCity[1]);
        clean.forecast(infoCity[2], infoCity[3]);
        clean.time(infoCity[0], infoCity[3]);
        return clean;
    })
    .then((constructor) => {
        procesos(constructor.card, constructor.dashboard, arr);  // Enviamos a la funcion 'main'
    })
    .catch(err => {
        console.log(err)
    })
}



