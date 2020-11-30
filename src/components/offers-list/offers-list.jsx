import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const OffersList = (props) => {
  const {offers} = props;

  return (
    offers.map((offer) => {
      return <Card
        offer={offer}
        key={offer.id}
      />;
    })
  );
};


OffersList.propTypes = {
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

export default OffersList;
