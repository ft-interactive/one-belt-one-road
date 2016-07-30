const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRiam91cm5vIiwiYSI6IjY2YmJkNDRkMGZhMjQ3ZDJkN2YxZDgyY2UyNjAyMjBjIn0.WQw7O86xdByVX0nwrmFLQw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  interactive: false,
});
