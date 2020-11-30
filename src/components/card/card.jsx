import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CardTypeOptions, AuthorizationStatus, AppRoute, FavoriteStatus} from '../../const';
import {ActionCreator} from '../../store/action';
import {getAuthorizationStatus} from '../../store/selectors';
import {addOfferToFavorites} from '../../store/api-actions';

const Card = (props) => {
  const {cardOptions, offer, changeActiveCard, resetActiveCard, favoriteButtonClickHandler, isAuth, redirectToRoute} = props;
  const {cardClassName, isHiddenPremiumMark, imageWrapperClassName, imageParams, bookmarkPrefix} = cardOptions;
  const {id, title, type, price, rating, isPremium, isFavorite, previewImage} = offer;

  return (
    <article
      className={`place-card ${cardClassName}`}
      onMouseEnter={() => {
        changeActiveCard(offer.id);
      }}
      onMouseLeave={() => {
        resetActiveCard();
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
          <img className="place-card__image" src={previewImage} width={imageParams.width} height={imageParams.height} alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button" onClick={() => {
            if (!isAuth) {
              redirectToRoute(AppRoute.LOGIN);
              return;
            }

            if (isFavorite) {
              favoriteButtonClickHandler(id, FavoriteStatus.NOT_FAVORITE);
            } else {
              favoriteButtonClickHandler(id, FavoriteStatus.FAVORITE);
            }
          }}>
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
  offer: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    previewImage: PropTypes.string
  }),
  changeActiveCard: PropTypes.func,
  resetActiveCard: PropTypes.func,
  addOfferToFavorites: PropTypes.func,
  redirectToRoute: PropTypes.func,
  favoriteButtonClickHandler: PropTypes.func,
  isAuth: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuth: getAuthorizationStatus(state) === AuthorizationStatus.AUTH
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(id) {
    dispatch(ActionCreator.changeActiveCard(id));
  },
  resetActiveCard() {
    dispatch(ActionCreator.resetActiveCard());
  },
  redirectToRoute(route) {
    dispatch(ActionCreator.redirectToRoute(route));
  },
  favoriteButtonClickHandler(id, status) {
    dispatch(addOfferToFavorites(id, status));
  }
});

export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
