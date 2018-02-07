
function mapToggleLayers(map) {
	var	toggleableLayerName = [ 'All Measure', '3D Buildings'];
	var toggleableLayerIds = [ 'measure_dot', '3d_buildings'];

	for (var i = 0; i < toggleableLayerIds.length; i++) {
		var id = toggleableLayerIds[i];
		var name = toggleableLayerName[i];
		
		var link = document.createElement('button');
		
		link.href = '#';
		link.className = 'active';
		link.id = id;
		link.textContent = name;

		link.onclick = function (e) {
			
			var clickedLayer = this.id;
			e.preventDefault();
			e.stopPropagation();

			var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

			if (visibility === 'visible') {
				map.setLayoutProperty(clickedLayer, 'visibility', 'none');
				this.className = '';
			} else {
				this.className = 'active';
				map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
			}
		};
		
		var layers = document.getElementById('menuLayers');
		layers.appendChild(link);
	}
		
	alert("toggle menu initialysed");
	
	
}
