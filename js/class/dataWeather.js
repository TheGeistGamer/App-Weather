import { calidadFormat } from "../config/calidad";
import { cleanForecast, cleanNameCity, cleanTime, descriWeather, kmFormat, percentFormat, precionFormat, redondear, tempFormat, transformDate, visibilityFormat} from "../config/operaciones";

export default class CleanInfoWeather {
    constructor() {
        this.card = [];
        this.dashboard = [];
    }

    mainWeather(obj) {
       const weather = {
        city: {
            name: cleanNameCity(obj.weather.city),
            estado: descriWeather(obj.weather[0].description),
        },
    
        temperatura: {
            temp: tempFormat(redondear(obj.main.temp,)),
            temp_max: tempFormat(redondear(obj.main.temp_max)),
            temp_min: tempFormat(redondear(obj.main.temp_min)),
            },
        
        info_matriz: {
            precion: precionFormat(obj.main.pressure),
            humedad: percentFormat(obj.main.humidity),
            sensacion: tempFormat(redondear(obj.main.feels_like)) ,
            },
    
        viento: kmFormat(obj.wind.speed),
    
        visibilidad: visibilityFormat(obj.visibility),
       }
       
       this.dashboard.push(weather);
       this.card.push(weather);
    }
    

    pollution (obj) {
    const getPollution = {
        main: calidadFormat(obj.list[0].main.aqi), // {title, barra}
        description: `La calidad del aire es de ${obj.list[0].main.aqi}`,
        }
        
        this.dashboard.push(getPollution);
    }


    forecast (obj, timeApi) {
        const arrForecast = obj.list; 
        const gmt = timeApi.gmt_offset;

         let container = [];
         for(let i = 0; i < 13; i++) {
             container.push(arrForecast[i]);
        }
        this.dashboard.push(cleanForecast(container,gmt));
     }


    time (weatherApi,timeApi) {
        const time = {
            current: cleanTime(timeApi.datetime),
            sunrise_sunset : {
                gmt: timeApi.gmt_offset,
                sunrise: weatherApi.sys.sunrise,
                sunset: weatherApi.sys.sunset
            }
        }

        this.card.push(time);
        this.dashboard.push(transformDate(time.sunrise_sunset));
     }
}

