export default function background(estado, tiempo) {

    const bg = (clima) => {
        // document.documentElement.style.setProperty('--weatherBG', `url(/img/background/${clima}.jpg)`);
        document.documentElement.style.setProperty('--weatherBG', `url(${clima})`);
        card_bg(clima);
    };

    const cover = () => {document.body.style.backgroundSize = 'cover'};
    const fixed = () => {document.body.style.backgroundAttachment = "fixed"};
    const repeat = () => {document.body.style.backgroundRepeat = 'no-repeat'};
    const border = () => {document.body.style.backgroundOrigin = 'border-box'};
    
    function card_bg(clima) {
        const bg = document.getElementById('card');
        bg.style.background = `url(${clima})`;
    };

    let time = tiempo.split(' ');
    let onlyHour = time[0].split(':')[0];
    time = time[1]; // a.m. y p.m.

    switch (estado) {
        // -- Despejado --
        case 'Cielo claro': setBackGround(time ,onlyHour, 'https://i.imgur.com/qrLQMdL.jpg', 'https://i.imgur.com/5i9bU3v.jpg'); break;

        // -- Nubes --
        case 'Nubes dispersas': setBackGround(time ,onlyHour, 'https://i.imgur.com/2Z4ws7e.jpg', 'https://i.imgur.com/ibu4Cm9.jpg');break; 

        case 'Algo de nubes': setBackGround(time ,onlyHour, 'https://i.imgur.com/2Z4ws7e.jpg', 'https://i.imgur.com/ibu4Cm9.jpg'); break;  

        case 'Nubes': setBackGround(time ,onlyHour, 'https://i.imgur.com/HpBRDUA.jpg', 'https://i.imgur.com/nVOBUmV.jpg'); break;

        case 'Muy nuboso':  setBackGround(time ,onlyHour, 'https://i.imgur.com/knRHj48.jpg', 'https://i.imgur.com/XBCwbz9.jpg'); break;

        // -- Lluvia --
        case 'Lluvia ligera': setBackGround(time ,onlyHour, 'https://i.imgur.com/tjY172A.jpg', 'https://i.imgur.com/W31ukmk.jpg'); break;

        case 'Lluvia moderada': setBackGround(time ,onlyHour, 'https://i.imgur.com/bzVYrj8.jpg', 'https://i.imgur.com/W31ukmk.jpg'); break;

        case 'Lluvia de gran intensidad': setBackGround(time ,onlyHour, 'https://i.imgur.com/2waxtNt.jpg', 'https://i.imgur.com/2waxtNt.jpg'); break;

        // -- Niebla --
        case 'Niebla': setBackGround(time ,onlyHour, 'https://i.imgur.com/sJzRSBG.jpg', 'https://i.imgur.com/sJzRSBG.jpg'); break;

        // -- Nevada --
        case 'Nevada ligera': setBackGround(time ,onlyHour, 'https://i.imgur.com/pBvNGot.jpg', 'https://i.imgur.com/1oUFViq.jpg'); break;

        default:
            setBackGround(time ,onlyHour, 'https://i.imgur.com/Dk7YmLc.jpg', 'https://i.imgur.com/T76VSC2.jpg'); break;

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