
function mapLayerDot(map) {
	//alert("creation Source");
	
	
	map.on('load', function(){
		
		//Add a geojson point source.
		map.addSource('measure', {
			type: 'geojson',
			data: {
				"type": "FeatureCollection",
				"features": [{
					"type": "Feature",
					"properties": {"name": "Test1"},
					"geometry": {
						"type": "Point",
						"coordinates": [-1.64,48.129]
					}
				},{
					"type": "Feature",
					"properties": {"name": "Test2"},
					"geometry": {
						"type": "Point",
						"coordinates": [-1.60,48.2]
					}
				}]
			}
		});
		
		//alert("Source crée");
		
		map.addLayer({
			"id": "measure_dot",
			"source": "measure",
			"type": "circle",
			"paint": {
				"circle-blur" : 0.8,
				"circle-opacity" : 0.5,
				
				"circle-translate" : [0,0],
				"circle-translate-anchor" : "map",
				
				"circle-pitch-scale" : "map",
				"circle-pitch-alignment" : "map",
				
				"circle-stroke-width" : 0,
				
				"circle-radius": 25,
				
				"circle-color": "#ff0000"
			}
		});
		alert("fin");
	});
	
}
