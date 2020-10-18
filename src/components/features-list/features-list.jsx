import React from 'react';
import PropTypes from 'prop-types';

const FeaturesList = (props) => {
  const {features} = props;
  return (
    features.map((feature) =>
      <li className="property__inside-item" key={feature}>
        {feature}
      </li>
    )
  );
};

FeaturesList.propTypes = {
  features: PropTypes.array
};

export default FeaturesList;
