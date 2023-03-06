import { getArrNameCitys, getCity } from "../api/getApiCitys";
import { checkData } from "../class/dataCity";

const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', e => {
    e.preventDefault();

    const city = search.value;

    if(city) {
        const postCity = getArrNameCitys(city); // Muestra 5 ciudades 

        postCity.then(response => {
            const OneCity = response[0];
            const filter = checkData(OneCity);     // Filtra si ya existe el pais en la base de datos

            if(filter) return search.value = '';
            else {
                getCity(OneCity);   //Inicia el procedimiento Regresa la ciudad seleccionada
                search.value = '';          
            }

        });
    }
})



