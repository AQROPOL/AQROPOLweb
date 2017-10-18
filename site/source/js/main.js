

	var rennes = new mapboxgl.LngLat(-1.6742900, 48.1119800);
	
	mapboxgl.accessToken = 'pk.eyJ1Ijoidm9nYW4iLCJhIjoiY2o4MnQxeWJyMGNteDJxbWk1ODFtYWZsZyJ9.WUlSGrHNVqJtaH1xrHaEHg';
	
	var map = new mapboxgl.Map({
		center: rennes,
		zoom: 13,
		container: 'map',
		style: 'mapbox://styles/mapbox/outdoors-v10'
	});
