import React from 'react';
import PropTypes from 'prop-types';
import withUserAssessment from '../../hocs/with-user-assessment/with-user-assessment';
import RatingList from '../rating-list/rating-list';

const ReviewForm = (props) => {
  const {comment, rating, isSubmitButtonDisabled, onChange, onSubmit} = props;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingList rating={rating} onChange={onChange}/>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength="50" maxLength="300" value={comment} onChange={onChange} required></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withUserAssessment(ReviewForm);
