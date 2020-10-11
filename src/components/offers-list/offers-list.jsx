import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };

    this.handleOfferCardHover = this.handleOfferCardHover.bind(this);
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return <OfferCard
            key={offer.id}
            offer={offer}
            onHover={this.handleOfferCardHover}
          />;
        })}
      </div>
    );
  }

  handleOfferCardHover(activeOffer) {
    this.setState({
      activeCard: activeOffer
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.array
};

export default OffersList;
