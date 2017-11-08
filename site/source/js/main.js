/**
//open DB
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE AQROPOLdb", function (err, result) {
    if (err) throw err;
  });
});
**/

//alert("creation var");

//token mapBox
mapboxgl.accessToken = 'pk.eyJ1IjoicG9zbmljYW50b2luZSIsImEiOiJjajk3MDJuN2swOW9tMzNxcXdvd3lhaDBhIn0.ZNR0Mp71bb6iZQtoawKL0w';

//center coord of the map
var rennes = new mapboxgl.LngLat(-1.65, 48.11);

//bounds coord of the map
var sw = new mapboxgl.LngLat(-1.88,48.02);
var ne = new mapboxgl.LngLat(-1.43, 48.20);
var rennesBounds = new mapboxgl.LngLatBounds(sw,ne);

initialisationMap();


function initialisationMap(){
	
	//alert("initialisation de la map");
	
	//element Map
	var map = new mapboxgl.Map({
	center: rennes,
	maxBounds: rennesBounds,
	
	doubleClickZoom: true,
	
	pitch:40,
	
	container: 'map',
	style: 'mapbox://styles/mapbox/light-v9'
	});
	
	//alert("map initialisée");
	
	mapLayerDot(map);
}


