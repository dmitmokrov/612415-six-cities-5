import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {RATING_LIST} from '../../const';

const RatingList = (props) => {
  const {rating, onChange} = props;
  return (
    RATING_LIST.map((it) => {
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
  );
};

RatingList.propTypes = {
  rating: PropTypes.string,
  onChange: PropTypes.func
};

export default RatingList;
