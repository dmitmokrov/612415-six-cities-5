import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards-list/cards-list';
import {CardTypeOptions} from '../../const';

const FavoritesCities = (props) => {
  const {offers} = props;
  const uniqueCities = [...new Set(offers.map((elem) => elem.city.name))];

  return (
    uniqueCities.map((city) =>
      <li className="favorites__locations-items" key={city}>
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <CardsList cardOptions={CardTypeOptions.FAVORITE} offers={offers.filter((elem) => elem.city.name === city)}/>
        </div>
      </li>
    )
  );
};

FavoritesCities.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    previewImage: PropTypes.string,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number
      }),
      name: PropTypes.string
    })
  }))
};

export default FavoritesCities;
