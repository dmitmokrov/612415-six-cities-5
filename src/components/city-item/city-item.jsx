import React from 'react';
import PropTypes from 'prop-types';

const CityItem = (props) => {
  const {city, isActive, changeCity} = props;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#" onClick={(evt) => {
        evt.preventDefault();
        changeCity(city);
      }}>
        <span>{city}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  changeCity: PropTypes.func.isRequired
};

export default CityItem;
