import React, {Fragment} from 'react';
import {ratingList} from '../../const';

const RatingList = ({rating, onChange}) => {
  return (
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
  );
};

export default RatingList;
