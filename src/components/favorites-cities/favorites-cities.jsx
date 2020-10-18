import React from 'react';
import PropTypes from 'prop-types';
import FavoritesList from '../favorites-list/favorites-list';

const FavoritesCities = (props) => {
  const {offers} = props;
  const uniqueCities = new Set();
  offers.forEach((offer) => uniqueCities.add(offer.city));

  return (
    [...uniqueCities].map((city) =>
      <li className="favorites__locations-items" key={city}>
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <FavoritesList offers={offers.filter((elem) => elem.city === city)}/>
        </div>
      </li>
    )
  );
};

FavoritesCities.propTypes = {
  offers: PropTypes.array
};

export default FavoritesCities;
