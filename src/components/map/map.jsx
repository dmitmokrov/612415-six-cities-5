import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';

class Map extends PureComponent {
  componentDidMount() {
    const city = [52.38333, 4.9]; // Амстердам
    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      zoom,
      center: city,
      zoomControl: false,
      marker: true
    });
    const offerCords = [52.3709553943508, 4.89309666406198];
    map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);


    leaflet
      .marker(offerCords, {icon})
      .addTo(map);
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

export default Map;
