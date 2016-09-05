const mapboxgl = require('mapbox-gl');
let activeLocationName = 'intro';
let startZoom = {};
let locations = {};

mapboxgl.accessToken = 'pk.eyJ1IjoiZmluYW5jaWFsdGltZXMiLCJhIjoiY0JjekRZNCJ9.WyRznmEEeKdrKLnfr4NpTA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/financialtimes/cis0irbgt005ygxm2pqnae1df',
  interactive: false,
}).fitBounds([[37.6155228259, 55.7521641226], [103.23, 35.33]], { padding: 25 });

function isElementOnScreen(id) {
  const element = document.getElementById(id);
  const bounds = element.getBoundingClientRect();

  return bounds.top < window.innerHeight * 0.67 && bounds.bottom > window.innerHeight * 0.67;
}

function setActiveLocation(locationName) {
  if (locationName === activeLocationName) return;

  map.flyTo(locations[locationName]);

  document.getElementById(locationName).classList.toggle('active');
  document.getElementById(activeLocationName).classList.toggle('active');

  map.setPaintProperty(`${activeLocationName}-polygon`, 'fill-opacity', 0);
  map.setPaintProperty(`${locationName}-polygon`, 'fill-opacity', 0.75);

  if (locations[activeLocationName].geometryType !== 'none') {
    map.setPaintProperty(`${activeLocationName}-feature`,
        `${locations[activeLocationName].geometryType}-opacity`, 0);
  }

  if (locations[locationName].geometryType !== 'none') {
    map.setPaintProperty(`${locationName}-feature`,
        `${locations[locationName].geometryType}-opacity`, 1);

    console.log(map.getPaintProperty(`${locationName}-feature`, 'line-opacity'));
  }

  activeLocationName = locationName;
}

map.on('load', () => {
  const loader = setInterval(() => {
    if (map.loaded() === true) {
      console.log('Loaded');

      startZoom = map.getZoom();

      clearInterval(loader);

      locations = {
        intro: {
          center: [70.42276141295, 46.4887879942319],
          bearing: 0,
          pitch: 0,
          speed: 0.3,
          zoom: startZoom,
          geometryType: 'none',
        },
        'moscow-kazan': {
          center: [37.616667, 55.75],
          bearing: 114,
          pitch: 60,
          speed: 0.3,
          zoom: startZoom * 1.1,
          geometryType: 'line',
        },
        'khorgos-aktau': {
          center: [66.9237, 48.0196],
          bearing: 116,
          pitch: 60,
          speed: 0.3,
          zoom: startZoom * 1.1,
          geometryType: 'line',
        },
        'central-asia-china': {
          center: [72.152674, 42.267858],
          bearing: 106,
          speed: 0.2,
          pitch: 60,
          zoom: startZoom * 1.2,
          geometryType: 'line',
        },
        'central-asia-china-line-d': {
          center: [68.78, 38.536667],
          bearing: 97,
          speed: 0.2,
          pitch: 60,
          zoom: startZoom * 1.3,
          geometryType: 'line',
        },
        'china-kg-uzb': {
          center: [74.26, 40.91],
          bearing: 104,
          speed: 0.2,
          pitch: 60,
          zoom: startZoom * 1.4,
          geometryType: 'line',
        },
        'khorgos-gateway': {
          center: [80.414444, 44.125556],
          bearing: 118,
          speed: 0.2,
          pitch: 60,
          zoom: startZoom * 1.4,
          geometryType: 'circle',
        },
        'laptops-chicken': {
          center: [66.9237, 48.0196],
          bearing: 116,
          pitch: 60,
          speed: 0.3,
          zoom: startZoom * 1.05,
          geometryType: 'line',
        },
        'china-tehran': {
          center: [51.4, 35.7167],
          bearing: 90,
          pitch: 60,
          speed: 0.3,
          zoom: startZoom * 1.3,
          geometryType: 'circle',
        },
        'new-delhi-china': {
          center: [76.24, 33.45],
          bearing: 0,
          speed: 0.5,
          pitch: 0,
          zoom: startZoom * 1.1,
          geometryType: 'none',
        },
      };

      console.log(`Starting zoom level is ${startZoom}`);
    } else {
      console.log('Loading...');
    }
  }, 10);
});

window.onscroll = () => {
  const locationNames = Object.keys(locations);

  for (let i = 0; i < locationNames.length; i++) {
    const locationName = locationNames[i];

    if (isElementOnScreen(locationName)) {
      setActiveLocation(locationName);

      break;
    }
  }
};
