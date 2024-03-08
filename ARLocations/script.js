window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'SUBESTACION UNIVERSIDAD',
            location: {
                lat: 25.6978482902565, 
                lng: -100.3181391435602,
            },
            modelFile: './assets/poste1/scene.gltf',
        },
        {
            name: 'Location 2',
            location: {
                lat: 25.699208876107605,
                lng: -100.31783408618175,
            },
            modelFile: './assets/poste1/scene.gltf',
        },
        {
            name: 'Location 3',
            location: {
                lat: 25.69919058489684, 
                lng: -100.31769988631393,
            },
            modelFile: './assets/poste1/scene.gltf',
        },
    ];
}

var models = [
    {
        url: './assets/poste1/scene.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        info: 'DGN CFE GOLFO NORTE',
    },
    {
        url: './assets/traf/scene.gltf',
        scale: '0.5 0.5 0.5',
        info: 'Transformador',
        rotation: '0 180 0',
    },
];

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(place.modelFile, model);

         // Add a data text label over each location model
          let dataText = document.createElement('a-text');
          dataText.setAttribute('value', place.name);
          dataText.setAttribute('position', '0 1 0');
          dataText.setAttribute('color', 'white');
          model.appendChild(dataText);

        model.setAttribute('animation-mixer', '');

        scene.appendChild(model);
    });
}

function setModel(modelFile, entity) {
    entity.setAttribute('gltf-model', `url(${modelFile})`);
    // You can also set other attributes like scale, rotation, position here if needed
}
