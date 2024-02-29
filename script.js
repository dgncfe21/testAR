const geoPoint = { // Replace with your actual GeoJSON data
    latitude: 25.699211497800306, 
    longitude: -100.3176197052763,
    data: "This is the label text" // Replace with your desired text or image data
};

AFrame.registerComponent('geo-point', {
  init: function() {
    const scene = this.el.sceneEl;
    const marker = document.createElement('a-marker');
    marker.setAttribute('type', 'geo');
    marker.setAttribute('geo', `latitude: ${geoPoint.latitude}; longitude: ${geoPoint.longitude};`);
    marker.addEventListener('markerFound', () => {
      const label = document.createElement('a-entity');
      label.setAttribute('position', '0 0.5 0');
      label.setAttribute('text', `value:${geoPoint.data}; color: black; fontSize: 20px;`);
      marker.appendChild(label);
    });
    scene.appendChild(marker);
  }
});
