import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

const ReviewsList = (props) => {
  const {comments} = props;
  return (
    comments.map((comment) =>
      <ReviewItem review={comment} key={comment.id}/>
    )
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsList;
