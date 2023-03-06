export default function background(estado, tiempo) {

    const bg = (clima) => {
        document.body.style.background = `url(/img/background/${clima}.jpg)`;
        card_bg(clima);
    };

    const cover = () => {document.body.style.backgroundSize = 'cover'};
    const fixed = () => {document.body.style.backgroundAttachment = "fixed"};
    const repeat = () => {document.body.style.backgroundRepeat = 'no-repeat'};
    const border = () => {document.body.style.backgroundOrigin = 'border-box'};
    
    function card_bg(clima) {
        const bg = document.getElementById('card');
        bg.style.background = `url(/img/background/${clima}.jpg)`;
    };

    let time = tiempo.split(' ');
    let onlyHour = time[0].split(':')[0];
    time = time[1]; // a.m. y p.m.

    switch (estado) {
        // -- Despejado --
        case 'Cielo claro': setBackGround(time ,onlyHour, 'dia/day', 'dia/night'); break

        // -- Nubes --
        case 'Nubes dispersas':setBackGround(time ,onlyHour, 'nubes/algo_nubes/day', 'nubes/algo_nubes/night'); break; 

        case 'Algo de nubes': setBackGround(time ,onlyHour, 'nubes/algo_nubes/day', 'nubes/algo_nubes/night'); break;  

        case 'Nubes': setBackGround(time ,onlyHour, 'nubes/nubes/clouds_day', 'nubes/nubes/night'); break
        ;
        case 'Muy nuboso':  setBackGround(time ,onlyHour, 'nubes/muy_nubuso/day', 'nubes/muy_nubuso/night'); break;

        // -- Lluvia --
        case 'Lluvia ligera': setBackGround(time ,onlyHour, 'lluvia/lluvia_ligera/day', 'lluvia/lluvia_ligera/night'); break;

        case 'Lluvia moderada': setBackGround(time ,onlyHour, 'lluvia/lluvia_moderada/day', 'lluvia/lluvia_moderada/night'); break;

        // -- Niebla --
        case 'Niebla': setBackGround(time ,onlyHour, 'niebla/niebla', 'niebla/niebla'); break;

        // -- Nevada --
        case 'Nevada ligera': setBackGround(time ,onlyHour, 'snowfall/nevada_ligera/day', 'snowfall/nevada_ligera/night'); break;

        default:
            setBackGround(time ,onlyHour, 'day', 'night'); break;

    }

    function setBackGround (time, onlyHour, urlDay, urlNight ) {    // Funcion para filtrar por hora los fondos de pantalla
        if(time == 'a.m.') {
            if(onlyHour > 7 ) { // 'dia'
                bg(urlDay); cover(); fixed(); repeat(); border();

            } else {// 'noche'
                bg(urlNight); cover(); fixed(); repeat(); border();
            }
        } else {

            if((onlyHour == 12 ) || (onlyHour > 1 && onlyHour < 7) ) { // 'dia'
                bg(urlDay); cover(); fixed(); repeat(); border();

            } else { // 'noche'
                bg(urlNight); cover(); fixed(); repeat(); border();
            }
        }
    }


}