const mapboxgl = require('mapbox-gl');
let activeLocationName = 'intro';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmluYW5jaWFsdGltZXMiLCJhIjoiY0JjekRZNCJ9.WyRznmEEeKdrKLnfr4NpTA';

const mapWidth = document.querySelector('#map').clientWidth;
const startZoom = mapWidth < 768 ? Math.ceil(mapWidth / 250) : Math.floor(mapWidth / 250);

console.log(startZoom);

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/financialtimes/cis0irbgt005ygxm2pqnae1df',
  attributionControl: false,
  interactive: false,
  center: [66.7638578, 38.8367267],
  bearing: 0,
  pitch: 0,
  speed: 0.5,
  zoom: startZoom,
});

const locations = {
  intro: {
    center: [66.7638578, 38.8367267],
    bearing: 0,
    pitch: 0,
    speed: 0.5,
    zoom: startZoom,
  },
  'moscow-kazan': {
    center: [43.33619, 55.92618],
    bearing: 0,
    pitch: 0,
    speed: 0.5,
    zoom: startZoom * 1.3,
  },

  'khorgos-aktau': {
    center: [65.732796, 44.868371],
    bearing: 0,
    pitch: 0,
    speed: 0.5,
    zoom: startZoom * 1.1,
  },
  'central-asia-china': {
    center: [72.152674, 42.267858],
    bearing: 0,
    speed: 0.5,
    pitch: 0,
    zoom: startZoom * 1.1,
  },
  'central-asia-china-line-d': {
    center: [72.152674, 42.267858],
    bearing: 0,
    speed: 0.5,
    pitch: 0,
    zoom: startZoom * 1.1,
  },
  'china-kg-uzb': {
    center: [72.152674, 42.267858],
    bearing: 0,
    speed: 0.5,
    pitch: 0,
    zoom: startZoom * 1.1,
  },
  'khorgos-gateway': {
    center: [72.152674, 42.267858],
    bearing: 0,
    speed: 0.5,
    pitch: 0,
    zoom: startZoom * 1.1,
  },
  'laptops-chicken': {
    center: [72.152674, 42.267858],
    bearing: 0,
    speed: 0.5,
    pitch: 0,
    zoom: startZoom * 1.1,
  },
  'china-tehran': {
    center: [72.152674, 42.267858],
    bearing: 0,
    speed: 0.5,
    pitch: 0,
    zoom: startZoom * 1.1,
  },
  'new-delhi': {
    center: [72.152674, 42.267858],
    bearing: 0,
    speed: 0.5,
    pitch: 0,
    zoom: startZoom * 1.1,
  },
};

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

  if (activeLocationName !== 'intro') {
    map.setPaintProperty(`${activeLocationName}-polygon`, 'fill-opacity', 0);
  }

  if (locationName !== 'intro') {
    map.setPaintProperty(`${locationName}-polygon`, 'fill-opacity', 0.75);
  }

  activeLocationName = locationName;
}

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
