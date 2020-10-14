//Create map
const map = L.map('mapid').setView([-18.7178758,-39.8480755], 15)

//Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

//Create pop overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    nimWidth:240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

//Create and add Icon
L.marker([-18.7178758,-39.8480755], {icon})
.addTo(map)
.bindPopup(popup)