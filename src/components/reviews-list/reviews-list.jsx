import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    reviews.map((elem) =>
      <ReviewItem review={elem} key={elem.comment}/>
    )
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsList;
