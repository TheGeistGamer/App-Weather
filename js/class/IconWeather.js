export default function iconWeather(str, time) {
    const tiempo = time.includes('a.m.');

    switch (str) {
        case "muy nuboso":
            if(!tiempo) return '<i class="fa-solid fa-cloud-sun"></i>';
            else return '<i class="fa-solid fa-cloud-moon"></i>';

        case "lluvia ligera":
            if(!tiempo) return '<i class="fa-solid fa-cloud-sun-rain"></i>';
            else return '<i class="fa-solid fa-cloud-moon-rain"></i>';

        case "cielo claro":
            if(!tiempo) return '<i class="fa-regular fa-sun"></i>';
            else return '<i class="fa-regular fa-moon"></i>';

        case "nubes dispersas":
            return '<i class="fa-solid fa-cloud"></i>';

        case "nubes":
            return '<i class="fa-solid fa-cloud"></i>'

        case "algo de nubes":
            return '<i class="fa-solid fa-cloud"></i>'

        case 'lluvia moderada':
            return '<i class="fa-solid fa-cloud-showers-heavy"></i>';

        case 'nieve':
            return '<i class="fa-regular fa-snowflake"></i>';

        case 'nevada ligera':
            return '<i class="fa-solid fa-cloud-meatball"></i>';

        default:
            break;
    }
}