
// Agregar el formato a calidad 
export function calidadFormat(num) {
    switch(num) {
        case 1 : return {
            title: 'Buena',
            barra: 'pollution_1'
        }
        case 2 : return {
            title: 'Aceptable',
            barra: 'pollution_2'
        }
        case 3 : return {
            title: 'Moderada',
            barra: 'pollution_3'
        }
        case 4 : return {
            title: 'Malo',
            barra: 'pollution_4'
        }
        case 5 : return {
            title: 'Muy malo',
            barra: 'pollution_5'
        }
    }
}
