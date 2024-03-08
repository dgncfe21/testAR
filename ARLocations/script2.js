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
            imageFile: './assets/subestacion_universidad.jpg',
        },
        {
            name: 'Location 2',
            location: {
                lat: 25.699208876107605,
                lng: -100.31783408618175,
            },
            imageFile: './assets/location2.jpg',
        },
        {
            name: 'Location 3',
            location: {
                lat: 25.69919058489684, 
                lng: -100.31769988631393,
            },
            imageFile: './assets/location3.jpg',
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        // Provide the URL of the image and the text to display
        setModel(place.imageFile, model, place.name);

        model.setAttribute('animation-mixer', '');

        scene.appendChild(model);
    });
}

function setModel(imageFile, entity, text) {
    // Create an a-image entity
    let image = document.createElement('a-image');
    image.setAttribute('src', imageFile);
    image.setAttribute('width', '2');
    image.setAttribute('height', '2');
    image.setAttribute('position', '0 0 0'); // Adjust position if needed
    entity.appendChild(image);

    // Create an a-text entity for the tag
    let dataText = document.createElement('a-text');
    dataText.setAttribute('value', text);
    dataText.setAttribute('position', '0 -1 0'); // Adjust position if needed
    dataText.setAttribute('color', 'white');
    entity.appendChild(dataText);
}

function startAR() {
    // Clicking on the screen to start AR.js
    let scene = document.querySelector('a-scene');
    scene.style.cursor = 'pointer';
    scene.setAttribute('arjs', 'startOnClick: true');
}

