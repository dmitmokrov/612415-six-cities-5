import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import {AppRoute} from '../../const';

const FavoritesList = (props) => {
  const {offers} = props;
  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          page={AppRoute.FAVORITES}
          key={offer.id}/>
      ))}
    </Fragment>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesList;
