function mapLayer(map) {
	var geojson;
    var xhttp = new XMLHttpRequest();

	xhttp.open("GET", "http://pilic27.irisa.fr/API/v2/donnees.json", false);
	
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
	//PARTICULES FINES ONLY
		
	//var geojsonParticulesFines = geojson.features.filter(function(item){return item.properties.type=="particules";});
		
	//PARTICULES LOURDES ONLY
		
	//var geojsonParticulesLourdes = geojson.features.filter(function(item){return item.properties.type=="particules";});
	
	//debut graphics design
	
	
	map.on('load', function(){
		//Add a geojson point source for fine particles
		map.addSource('measureFines', {
			type: 'geojson',
			data: geojson,
		});
		
		//Add a geojson point source for heavy particles.
		map.addSource('measureLourdes', {
			type: 'geojson',
			data: geojson,
		});
		
		
		//LAYER measure_dot_fines
		map.addLayer({
			"id": "measure_dot_fines",
			"source": "measureFines",
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
		
		//LAYER measure_dot_fines
		map.addLayer({
			"id": "measure_dot_lourdes",
			"source": "measureLourdes",
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
		
		
		
		
		
		//LAYER Heatmap_dot_fines
		map.addLayer({
			"id":"heatmap_dot_fines",
			"source":"measureFines",
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
				
				"heatmap-radius": 50,
				
				// Transition from heatmap to circle layer by zoom level
				"heatmap-opacity":0.9,
			}
		});
		
		//LAYER Heatmap_dot_lourdes
		map.addLayer({
			"id":"heatmap_dot_lourdes",
			"source":"measureLourdes",
			"type":"heatmap",
			'layout': {
				'visibility': 'none'
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
				
				"heatmap-radius": 50,
				
				// Transition from heatmap to circle layer by zoom level
				"heatmap-opacity":0.9,
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
	//alert("Layers initialysed");
	
	
}
