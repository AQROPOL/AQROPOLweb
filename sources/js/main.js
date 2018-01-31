//alert("creation var");

//token mapBox
mapboxgl.accessToken = 'pk.eyJ1IjoicG9zbmljYW50b2luZSIsImEiOiJjajk3MDJuN2swOW9tMzNxcXdvd3lhaDBhIn0.ZNR0Mp71bb6iZQtoawKL0w';

//center coord of the map
var rennes = new mapboxgl.LngLat(-1.65, 48.11);

//bounds coord of the map
var sw = new mapboxgl.LngLat(-1.95,48);
var ne = new mapboxgl.LngLat(-1.35, 48.1932);
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
	style: 'mapbox://styles/posnicantoine/cjd392dx5440k2rn21njte4jw'
	});
	
	//alert("map initialisée");
	
	mapLayer(map);
	mapToggleLayers(map);
}


