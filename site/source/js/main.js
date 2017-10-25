	//center coord of the map
	var rennes = new mapboxgl.LngLat(-1.65, 48.11);
	
	
	//bounds coord of the map
	var sw = new mapboxgl.LngLat(-1.88,48.02);
	var ne = new mapboxgl.LngLat(-1.43, 48.20);
	var rennesBounds = new mapboxgl.LngLatBounds(sw,ne);
	
	//token mapBox
	mapboxgl.accessToken = 'pk.eyJ1IjoicG9zbmljYW50b2luZSIsImEiOiJjajk3MDJuN2swOW9tMzNxcXdvd3lhaDBhIn0.ZNR0Mp71bb6iZQtoawKL0w';
	
	
	//element Map
	var map = new mapboxgl.Map({
		center: rennes,
		maxBounds: rennesBounds,
		
		doubleClickZoom: true,
		
		pitch:40,
		
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v9'
	});
	
	
