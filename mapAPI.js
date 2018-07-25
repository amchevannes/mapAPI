// Create setup map variables
var ourLoc;
var view;
var map;
// lat=47.6820
// log=-122.1468
// Initialize our variables
function init(){
  ourLoc = ol.proj.fromLonLat([-122.1468,47.6820]);

  view = new ol.View({
    center: ourLoc,
    zoom: 6
  });
  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

window.onload = init;
