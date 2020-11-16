import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withUserAssessment from '../../hocs/with-user-assessment/with-user-assessment';
import {sendComment} from '../../store/api-actions';
import {ratingList} from '../../const';

const ReviewForm = (props) => {
  const {id, comment, rating, onChange, clearForm, onSubmit} = props;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => {
      evt.preventDefault();
      clearForm();
      onSubmit(id, {comment, rating});
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {
          ratingList.map((it) => {
            return (
              <Fragment key={it}>
                <input className="form__rating-input visually-hidden" name="rating" value={it} id={`${it}-stars`} type="radio" onChange={onChange} checked={rating === it}/>
                <label htmlFor={`${it}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </Fragment>
            );
          })
        }

      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment} onChange={onChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, {comment, rating}) {
    dispatch(sendComment(id, {comment, rating}));
  }
});

export default connect(null, mapDispatchToProps)(withUserAssessment(ReviewForm));
