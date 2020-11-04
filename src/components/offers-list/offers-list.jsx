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
  offers: PropTypes.array,
};

export default OffersList;
