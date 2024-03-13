function toggleInfo() {
const markers = document.querySelectorAll('a-entity[gps-entity-place]'); // Select all markers

  markers.forEach(marker => {
    const detailsElement = marker.querySelector('a-text[data-details]'); // Assuming details use a-text with data-details attribute

    if (detailsElement) { // Check if details element exists
      const isVisible = detailsElement.getAttribute('visible') === 'true';
      detailsElement.setAttribute('visible', !isVisible); // Toggle visibility
    }
  });
}


window.onload = () => {
  const button = document.querySelector('button[data-action="toggleInfo"]');
  button.addEventListener('click', toggleInfo); // Added event listener for button

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
      imageFile: './assets/int2.jpg',
      details: 'Some additional information about this location', // Added details property
    },
    {
            name: 'Location 2',
            location: {
                lat: 25.699208876107605,
                lng: -100.31783408618175,
            },
          imageFile: './assets/int2.jpg',
          details: 'Some additional information about this location',
          
        },
        {
            name: 'ADMINISTRACION INTERPUERTO',
            location: {
                lat: 25.914878364541607, 
                lng:-100.29249362805115,
            },
           imageFile: './assets/int2.jpg',
           details: 'Oficinas Centrales',
        },
        {
            name: 'SE INTERPTO MTY',
            location: {
                lat: 25.69919058489684, 
                lng: -100.31769988631393,
            },
             imageFile: './assets/int2.jpg',
             details: 'CAP:30MVAS BCOS:2',
        },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement('a-entity');
    model.setAttribute(
      'gps-entity-place',
      `latitude: ${latitude}; longitude: ${longitude};`
    );

    setModel(place.imageFile, model, place.name, place.details); // Pass details

    model.setAttribute('animation-mixer', ''); // Animation can be added here

    scene.appendChild(model);
  });
}

function setModel(imageFile, entity, text, details = '') {
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
  dataText.setAttribute('color', 'red');
  entity.appendChild(dataText);

  // Check if details are provided
  if (details) {
    // Create an additional a-text entity for details
    let detailsText = document.createElement('a-text');
    detailsText.setAttribute('value', details);
    detailsText.setAttribute('position', '0 -2 0.1'); // Adjust position if needed
    detailsText.setAttribute('scale', '1.5 1.5 1'); // Adjust size if needed
    detailsText.setAttribute('color', 'red'); // Adjust color if needed
    entity.appendChild(detailsText);
  }
   
}
