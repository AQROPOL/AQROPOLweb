//alert("creation var");

//token mapBox
mapboxgl.accessToken = '';//Insert here your mapbox token

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
	
	mapLayer(map, "http://pilic27.irisa.fr/API/v2/donnees.php?query=all");
	mapToggleLayers(map);
}

function initialisationMapDate(){
	
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
	var legendMeasure = document.getElementById('AllMeasure');
	var legendHeatmap = document.getElementById('HeatMap');
	legendMeasure.style.display='none';
	legendHeatmap.style.display='block';
	mapToggleLayersDate(map);
	mapLayerDate(map);
}
function initialisationMapMonth(){
	
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
	var date = new Date();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	mapLayer(map, "http://pilic27.irisa.fr/API/v2/donnees.php?query=filter&month="+month+"&year="+year);
	mapToggleLayersDate(map);
}
