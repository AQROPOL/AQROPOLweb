var	toggleableLayerName = [ 'Measure', 'HeatMap', '3D Buildings'];
var toggleableLayerIds = [ 'measureDot', 'heatmap', '3d_buildings'];
var listButton = [];




function mapToggleLayers(map) {
	for (var i = 0; i < toggleableLayerIds.length; i++) {
		var id = toggleableLayerIds[i];
		var name = toggleableLayerName[i];
		var link = document.createElement('button');
		
		link.href = '#';
		link.id = id;
		link.textContent = name;
		
		if(id == toggleableLayerIds[0]){
			link.className = '';
		}else{
			link.className = 'active';
		}
		
		link.onclick = function (e) {
			
			var clickedLayer = this.id;
			var legendMeasure = document.getElementById('AllMeasure');
			var legendHeatmap = document.getElementById('HeatMap');
			e.preventDefault();
			e.stopPropagation();
			var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
			if(this.id === 'measureDot'){
				if(this.className === 'active'){
					legendMeasure.style.display='none';
					
				}
				else{
					legendHeatmap.style.display='none';
					legendMeasure.style.display='block';
				}
			}
			if(this.id === 'heatmap'){
				if(this.className ==='active'){
					legendHeatmap.style.display='none';
				}
				else{
					legendMeasure.style.display='none';
					legendHeatmap.style.display='block';
				}
			}
			if (visibility === 'visible') {
				map.setLayoutProperty(clickedLayer, 'visibility', 'none');
				this.className = '';
				
			} else {
				this.className = 'active';
				map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
			}
			
			switch(clickedLayer) {
				case toggleableLayerIds[0]:
					map.setLayoutProperty(toggleableLayerIds[1], 'visibility', 'none');
					if(listButton[1].className === 'active'){
						listButton[1].className = '';
						legendHeatmap.style.display='none';
							
					}
					break;
				case toggleableLayerIds[1]:
					map.setLayoutProperty(toggleableLayerIds[0], 'visibility', 'none');
					if(listButton[0].className === 'active'){
						listButton[0].className = '';	
						legendMeasure.style.display='none';
					}
					break;
			} 
					
		};
		var layers = document.getElementById('menuLayers');
		layers.appendChild(link);
		listButton.push(link);
		
		
	}
	
	
}
function mapToggleLayersDate(map) {
	for (var i = 0; i < toggleableLayerIds.length; i++) {
		var id = toggleableLayerIds[i];
		var name = toggleableLayerName[i];
		var link = document.getElementById(id);
		
		link.href = '#';
		link.id = id;
		link.textContent = name;
		
		if(id == toggleableLayerIds[0]){
			link.className = '';
		}else{
			link.className = 'active';
		}
		link.onclick = function (e) {
			
			var clickedLayer = this.id;
			var legendMeasure = document.getElementById('AllMeasure');
			var legendHeatmap = document.getElementById('HeatMap');
			e.preventDefault();
			e.stopPropagation();
			var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
			if(this.id === 'measureDot'){
				if(this.className === 'active'){
					legendMeasure.style.display='none';
					
				}
				else{
					legendHeatmap.style.display='none';
					legendMeasure.style.display='block';
				}
			}
			if(this.id === 'heatmap'){
				if(this.className ==='active'){
					legendHeatmap.style.display='none';
				}
				else{
					legendMeasure.style.display='none';
					legendHeatmap.style.display='block';
				}
			}
			if (visibility === 'visible') {
				map.setLayoutProperty(clickedLayer, 'visibility', 'none');
				this.className = '';
				
			} else {
				this.className = 'active';
				map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
			}
			
			switch(clickedLayer) {
				case toggleableLayerIds[0]:
					map.setLayoutProperty(toggleableLayerIds[1], 'visibility', 'none');
					if(listButton[1].className === 'active'){
						listButton[1].className = '';
						legendHeatmap.style.display='none';
							
					}
					break;
				case toggleableLayerIds[1]:
					map.setLayoutProperty(toggleableLayerIds[0], 'visibility', 'none');
					if(listButton[0].className === 'active'){
						listButton[0].className = '';	
						legendMeasure.style.display='none';
					}
					break;
			} 
					
		};
		
		var layers = document.getElementById('menuLayers');
		layers.appendChild(link);
		
		listButton.push(link);
		
		
	}
}
