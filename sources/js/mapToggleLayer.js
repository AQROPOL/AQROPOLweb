
function mapToggleLayers(map) {
	var	toggleableLayerName = [ 'All Measure', 'HeatMap', '3D Buildings'];
	var toggleableLayerIds = [ 'measure_dot', 'heatmap_dot', '3d_buildings'];
	var listButton = [];

	for (var i = 0; i < toggleableLayerIds.length; i++) {
		var id = toggleableLayerIds[i];
		var name = toggleableLayerName[i];
		
		var link = document.createElement('button');
		
		link.href = '#';
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
			
			switch(clickedLayer) {
				case 'measure_dot':
					map.setLayoutProperty(toggleableLayerIds[1], 'visibility', 'none');
					if(listButton[1].className === 'active'){
						listButton[1].className = '';	
					}
					break;
				case 'heatmap_dot':
					map.setLayoutProperty(toggleableLayerIds[0], 'visibility', 'none');
					if(listButton[0].className === 'active'){
						listButton[0].className = '';	
					}
					break;
			} 
					
		};
		
		var layers = document.getElementById('menuLayers');
		layers.appendChild(link);
		
		if(id == toggleableLayerIds[0]){
			link.className = '';
			map.setLayoutProperty(link.id, 'visibility', 'none');
		}else{
			link.className = 'active';
		}
		listButton.push(link);
		
	}
		
	alert("toggle menu initialysed");
	
	
}
