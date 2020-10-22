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
  offers: PropTypes.array.isRequired
};

export default CardsList;
