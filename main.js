import getMap from "./js/api/mapa";
import { data } from "./js/class/dataCity";
import { indice } from "./js/config/operaciones";
import { addCardToPage } from "./js/crearCard";
import background from "./js/interface/background";
import displayDB from "./js/interface/responsive";
import dashboard from "./js/modifDashboard";
import timeline from "./js/timeline";

export default function procesos(card, db, arrCoordenadas) {

    try {
        const [lat, lon, ...city] = arrCoordenadas;
        let id = indice();     // Crea un 'id' por cada petición
        
        addCardToPage(card, id);  // Post los valores a card

        timeline(db[2]);      // Post de las card del carrusel

        dashboard(db);        // Post los valores a dashboard

        getMap(lat, lon);     // Post el mapa de la región

        background(db[0].city.estado, card[1].current);

        displayDB(id);          // Renderiza todos los elementos

        data(id ,arrCoordenadas);
 
    } catch (error) {
        console.log(error);
    }
}