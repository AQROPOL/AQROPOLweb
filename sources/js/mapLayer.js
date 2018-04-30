function mapLayer(map, dbquery) {
	var geojson;
    var xhttp = new XMLHttpRequest();

	xhttp.open("GET", dbquery, false);
	
	xhttp.onreadystatechange = function() {
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			geojson = JSON.parse(this.responseText);
			loadMapLayers(geojson, map);
		};
	};
	xhttp.send(); 
}
function mapLayerDate(map) {
	var geojson;
	var ladate = document.getElementById('dateinput').value;
	//METTRE LADATE QUAND LES FLAMBI DE LA BASE DE DONNEE AURONT MIS DAUTRE DATES QUE 000000000
	var ladatetest="0000-00-00"; 
	var url = "http://pilic27.irisa.fr/API/v2/donnees.php?query=filter&date='"+ladate+"'";//ICI
    var xhttp = new XMLHttpRequest();

	xhttp.open("GET", url, false);
	
	xhttp.onreadystatechange = function() {
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			geojson = JSON.parse(this.responseText);
			loadMapLayers(geojson, map);
		};
	};
	xhttp.send(); 
}

function loadMapLayers(geojson, map){
	/* coordonnées max de la map: 
	 * float s = (float) -1.84;
	 * float w = (float) 48.02;
	 * float n = (float) -1.44;
	 * float e = (float) 48.20;
	*/
	console.log(geojson);
	
	map.on('load', function(){
		//Add a geojson point source for fine particles
		map.addSource('measure', {
			type: 'geojson',
			data: geojson,
		});
		
		//LAYER measure
		map.addLayer({
			"id": "measureDot",
			"source": "measure",
			"type": "circle",
			'layout': {
				'visibility': 'none'
             },
			"paint": {
				"circle-blur" : 0.8,
				"circle-opacity" : 0.5,
				
				"circle-translate" : [0,0],
				"circle-translate-anchor" : "map",
				
				"circle-pitch-scale" : "map",
				"circle-pitch-alignment" : "map",
				
				"circle-stroke-width" : 0,
				
				"circle-radius": 10,
				
				"circle-color": {
					"property": 'valeur',
					"type": "exponential",
					"stops": [
						[0000, "rgb(0, 255, 0)"],
						[1000, "rgb(0, 255, 0)"],
						[2000, "rgb(97, 255, 0)"],
						[3000, "rgb(165, 255, 0)"],
						[4000, "rgb(221, 255, 0)"],
						[5000, "rgb(255, 216, 0)"],
						[6000, "rgb(255, 170, 0)"],
						[7000, "rgb(255, 131, 0)"],
						[8000, "rgb(255, 80, 0)"],
						[9000, "rgb(255, 50, 0)"],
						[9999, "rgb(255, 0, 0)"],
						
					]
				}
			}
		});
				
		
		
		//LAYER Heatmap
		map.addLayer({
			"id":"heatmap",
			"source":"measure",
			"type":"heatmap",
			'layout': {
				'visibility': 'visible'
             },
			"paint":{
				// Increase the heatmap weight
				"heatmap-weight": {
					property: 'valeur',
					type: 'exponential',
					stops: [
						[1, 0],
						[9999, 1]
					]
				},

				// Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
				// Begin color ramp at 0-stop with a 0-transparancy color
				// to create a blur-like effect.
				"heatmap-color": [
					"interpolate",
					["linear"],
					["heatmap-density"],
						0, 'rgba(0,0,0,0)',
						0.3, ' #ffcccc',
						0.4, ' #ffb3b3',
						0.5, ' #ff9999',
						0.6, ' #ff8080',
						0.7, ' #ff6666',
						0.8, ' #ff4d4d',
						0.9, ' #ff3333',
						
				],
				
				"heatmap-radius": 20,
				
				"heatmap-opacity":0.85,
			}
		});
				
		
		//LAYER 3d_building		
		map.addLayer({
			'id': '3d_buildings',
			'source': 'composite',
			'source-layer': 'building',
			'type': 'fill-extrusion',
			'layout': {
				'visibility': 'visible'
            },
			'paint': {
				'fill-extrusion-color': '#aaaaaa',

				'fill-extrusion-height':["max", ["get", "height"], 12],
				'fill-extrusion-base': 0,
				'fill-extrusion-opacity': .6
			}
		});
       
	});	
}
