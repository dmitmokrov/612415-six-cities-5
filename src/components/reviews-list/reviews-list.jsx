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
  comments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string
    }),
    comment: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number
  }))
};

export default ReviewsList;
