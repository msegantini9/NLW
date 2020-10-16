//Create map
const map = L.map('mapid').setView([-18.7178758,-39.8480755], 15)
//Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

function addMarker({id, name, lat, lng} = orphanage){

    //Create pop overlay
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        nimWidth:240,
        minHeight:240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"></a>`)

    //Create and add Icon
    L.marker([lat,lng], {icon})
    .addTo(map)
    .bindPopup(popup)

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})
