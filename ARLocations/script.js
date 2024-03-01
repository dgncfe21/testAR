window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Location1',
            location: {
                lat: 25.699220054068363,
                lng: -100.31767394852433,
            },
            modelFile: './assets/poste1/scene.gltf',
        },
        {
            name: 'Location 2',
            location: {
                lat: 25.699208876107605,
                lng: -100.31783408618175,
            },
            modelFile: './assets/traf/scene.gltf',
        },
        {
            name: 'Location 3',
            location: {
                lat: 25.69919058489684, 
                lng: -100.31769988631393,
            },
            modelFile: './assets/poste1l/scene.gltf',
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

        model.setAttribute('animation-mixer', '');

        scene.appendChild(model);
    });
}

function setModel(modelFile, entity) {
    entity.setAttribute('gltf-model', `url(${modelFile})`);
    // You can also set other attributes like scale, rotation, position here if needed
}
