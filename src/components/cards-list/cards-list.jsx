import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CardsList = (props) => {
  const {offers, cardOptions} = props;
  return (
    offers.map((offer) => (
      <Card
        cardOptions={cardOptions}
        offer={offer}
        key={offer.id}/>
    ))
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    previewImage: PropTypes.string
  }))
};

export default CardsList;
