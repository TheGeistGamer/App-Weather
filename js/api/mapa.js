export default function getMap (lat, lon) {

    const url = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${lon},${lat},6,0/500x500?access_token=pk.eyJ1IjoiYWNrZXJtYW42OSIsImEiOiJjbGVveWR2cGowM2phM3Fsa3F1dnh6MXhhIn0.Jhi5sDmy4gkGJ9z3hKiWmQ`

    const mapa = document.getElementById('map');
    const img = document.createElement('img');
    
    try {
    if(mapa.childNodes.length > 0) mapa.firstChild.remove();

    fetch(url)
    .then(response => {
        img.src = response.url;
        img.alt = 'Imagen de Mapa';
        mapa.appendChild(img);
    })
    .catch(err => console.log(err));

    } catch (error) {
        console.log(error);
    }
}