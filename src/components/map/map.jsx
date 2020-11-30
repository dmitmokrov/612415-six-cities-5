import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {CityCoords} from '../../const';
import {isArraysEqual} from '../../utils';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this.mapRef = createRef();
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this._map.remove();
      this._renderMap();
      return;
    }

    if (this.props.activeCardId !== prevProps.activeCardId) {
      this._renderMarkers();
    }

    if (!isArraysEqual(this.props.offers, prevProps.offers)) {
      this._renderMarkers();
    }
  }

  _renderMarkers() {
    const {offers, activeCardId, withLayer} = this.props;
    const iconSize = [30, 30];
    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize
    });
    const activeIcon = leaflet.icon({
      iconUrl: `./img/pin-active.svg`,
      iconSize
    });

    if (withLayer) {
      this._map.eachLayer((layer) => {
        this._map.removeLayer(layer);
      });

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);
    }

    offers.forEach((offer) => {
      const coords = [offer.location.latitude, offer.location.longitude];
      if (offer.id === activeCardId) {
        leaflet
        .marker(coords, {icon: activeIcon})
        .addTo(this._map);
      } else {
        leaflet
        .marker(coords, {icon})
        .addTo(this._map);
      }
    });
  }

  _renderMap() {
    const {city} = this.props;
    const center = CityCoords[city.toUpperCase()];
    const zoom = 12;
    const map = leaflet.map(this.mapRef.current, {
      zoom,
      center,
      zoomControl: false,
      marker: true
    });

    this._map = map;

    // map.setView(center, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this._renderMarkers();
  }

  render() {
    return (
      <div
        id="map"
        style={{height: `100%`}}
        ref={this.mapRef}
      >
      </div>
    );
  }
}

Map.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.array,
  activeCardId: PropTypes.number,
  withLayer: PropTypes.bool.isRequired
};

export default Map;
