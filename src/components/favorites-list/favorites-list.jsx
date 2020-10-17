import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from '../favorite-card/favorite-card';

const FavoritesList = (props) => {
  const {offers} = props;
  return (
    <Fragment>
      {offers.map((offer) => (
        <FavoriteCard
          offer={offer}
          key={offer.id}/>
      ))}
    </Fragment>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesList;
