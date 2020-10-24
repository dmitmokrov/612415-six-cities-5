import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };

    this.handleOfferCardHover = this.handleOfferCardHover.bind(this);
  }

  handleOfferCardHover(activeOffer) {
    this.setState({
      activeCard: activeOffer
    });
  }

  render() {
    const {offers} = this.props;

    return (
      offers.map((offer) => {
        return <Card
          offer={offer}
          onHover={this.handleOfferCardHover}
          key={offer.id}
        />;
      })
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array,
};

export default OffersList;
