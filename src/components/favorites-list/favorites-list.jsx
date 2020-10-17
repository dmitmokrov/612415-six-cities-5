import React from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from '../favorite-card/favorite-card';

const FavoritesList = (props) => {
  const {offers} = props;
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoriteCard
          offer={offer}
          key={offer.id}/>
      ))}
    </div>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesList;
