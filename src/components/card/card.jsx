import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {CardTypeOptions} from '../../const';

const Card = (props) => {
  const {cardOptions, offer, onHover} = props;
  const {cardClassName, isHiddenPremiumMark, imageWrapperClassName, imageParams, bookmarkPrefix} = cardOptions;
  const {id, title, type, price, rating, isPremium, photos} = offer;

  return (
    <article
      className={`place-card ${cardClassName}`}
      onMouseEnter={() => {
        if (onHover) {
          onHover(offer);
        }
      }}
    >
      {
        !isHiddenPremiumMark && isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${imageWrapperClassName}`}>
        <a href="#">
          <img className="place-card__image" src={photos[0]} width={imageParams.width} height={imageParams.height} alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${bookmarkPrefix} bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.defaultProps = {
  cardOptions: CardTypeOptions.DEFAULT
};

Card.propTypes = {
  cardOptions: PropTypes.object,
  offer: PropTypes.object.isRequired,
  onHover: PropTypes.func
};

export default Card;
