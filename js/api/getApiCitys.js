import getWeather from "./getApiWeather";

// Obtener posibles paise 
export function getArrNameCitys (city, indice = false){
    let countrys = [];

    const modifCountry = city.split(' ').join('%20');
    const getCoordenadas = `https://api.mapbox.com/geocoding/v5/mapbox.places/${modifCountry}.json?access_token=pk.eyJ1IjoidGhlZ2Vpc3RnYW1lciIsImEiOiJjbGN0eGgzcWQwZWtoM3BybGZtc2U1YmdqIn0.BnWoCa88-sbkq_ILgnN9AA&autocomplete=true&fuzzyMatch=true&limit=5&types=place&language=es`;
    
    if(indice) {
        return new Promise(function(resolve, reject) {
            fetch(getCoordenadas)
            .then(response => response.json())
            .then(obj => resolve(obj));
        })
    }else {
        return new Promise(function(resolve, reject) {
            fetch(getCoordenadas)
            .then(response => response.json())
            .then(arr => {
                arr.features.forEach(element => {
                    countrys.push(element.place_name);
                });
                resolve(countrys);
            })
            .catch(err => {
                throw new Error(err);
            })
        });
    }
}


export function getCity (str) {     
    const city = str.split(',');

    const infoCity = getArrNameCitys(city[0], true);    // Solo estable la primer opcion de los 5 paises que te da a escojer

    infoCity.then(response => {
        const coordenada = response.features[0].center; 

        coordenada.reverse();   
        coordenada.push(str);      
        
        getWeather(coordenada);     // [coordenadas, nombre_Pais ]
    })
}



