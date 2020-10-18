import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';

const OfferCard = (props) => {
  const {offer, page, onHover} = props;
  const {id, title, type, price, rating, isPremium, photos} = offer;
  const isFavoritesPage = page === AppRoute.FAVORITES;

  return (
    <article
      className={`${isFavoritesPage ? `favorites__card` : `cities__place-card`} place-card`}
      onMouseEnter={() => {
        if (onHover) {
          onHover(offer);
        }
      }}
    >
      {
        !isFavoritesPage && isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }
      <div className={`${isFavoritesPage ? `favorites__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={photos[0]} width={`${isFavoritesPage ? `150` : `260`}`} height={`${isFavoritesPage ? `110` : `200`}`} alt="Place image"/>
        </a>
      </div>
      <div className={`${isFavoritesPage ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavoritesPage ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavoritesPage ? `In` : `To`} bookmarks`}</span>
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

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
  page: PropTypes.string,
  onHover: PropTypes.func
};

export default OfferCard;
