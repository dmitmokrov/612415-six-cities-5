import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import PhotosList from '../../photos-list/photos-list';
import FeaturesList from '../../features-list/features-list';
import ReviewsList from '../../reviews-list/reviews-list';
import ReviewForm from '../../review-form/review-form';
import Map from '../../map/map';
import CardsList from '../../cards-list/cards-list';
import {CardTypeOptions, AuthorizationStatus, AppRoute} from '../../../const';
import {ActionCreator} from '../../../store/action';
import {getCity, getOffer, getNearbyOffers, getComments, getAuthorizationStatus} from '../../../store/selectors';
import {fetchOffer, fetchNearbyOffers, fetchComments, sendComment} from '../../../store/api-actions';

class OfferPage extends Component {
  componentDidMount() {
    const {loadOffer, loadNearbyOffers, loadComments} = this.props;
    const id = this.props.match.params.id;
    loadOffer(id);
    loadNearbyOffers(id);
    loadComments(id);
  }

  componentDidUpdate(prevProps) {
    const {loadOffer, loadComments, loadNearbyOffers} = this.props;
    const id = this.props.match.params.id;

    if (prevProps.match.params.id !== id) {
      loadComments(id);
      loadOffer(id);
      loadNearbyOffers(id);
    }
  }

  render() {
    const {offer, nearbyOffers, nearbyOffersForMap, comments, onSubmitForm, isAuth, redirectToRoute, addOfferToFavorites} = this.props;

    if (!offer) {
      return <div>Loading...</div>;
    }

    const {id, city, title, description, type, price, rating, isPremium, bedrooms, guestsMaxCount, goods, images, host} = offer;

    return (
      <div className="page">
        <Header/>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <PhotosList photos={images}/>
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  isPremium &&
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button" onClick={
                    () => {
                      if (!isAuth) {
                        redirectToRoute(AppRoute.LOGIN);
                        return;
                      }
                      addOfferToFavorites(offer);
                    }
                  }>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${rating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {guestsMaxCount} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    <FeaturesList features={goods}/>
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  {Boolean(comments.length) &&
                    <Fragment>
                      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                      <ul className="reviews__list">
                        <ReviewsList comments={comments}/>
                      </ul>
                    </Fragment>
                  }

                  {
                    isAuth && <ReviewForm id={id} onSubmitForm={onSubmitForm}/>
                  }

                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map city={city.name} offers={nearbyOffersForMap} activeCardId={id} withLayer={true}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <CardsList cardOptions={CardTypeOptions.NEAR} offers={nearbyOffers}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: getCity(state),
  offer: getOffer(state),
  nearbyOffers: getNearbyOffers(state),
  nearbyOffersForMap: [...getNearbyOffers(state), getOffer(state)],
  comments: getComments(state),
  isAuth: getAuthorizationStatus(state) === AuthorizationStatus.AUTH
});

const mapDispatchToProps = (dispatch) => ({
  loadOffer(id) {
    dispatch(fetchOffer(id));
  },
  loadNearbyOffers(id) {
    dispatch(fetchNearbyOffers(id));
  },
  loadComments(id) {
    dispatch(fetchComments(id));
  },
  onSubmitForm(id, {comment, rating}) {
    dispatch(sendComment(id, {comment, rating}));
  },
  addOfferToFavorites(offer) {
    dispatch(ActionCreator.addOfferToFavorites(offer));
  },
  redirectToRoute(route) {
    dispatch(ActionCreator.redirectToRoute(route));
  }
});

OfferPage.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.shape({
      name: PropTypes.string
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
    bedrooms: PropTypes.number,
    guestsMaxCount: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string
    })
  }),
  nearbyOffers: PropTypes.array,
  nearbyOffersForMap: PropTypes.array,
  comments: PropTypes.array,
  city: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
  reviews: PropTypes.array,
  match: PropTypes.object.isRequired,
  loadOffer: PropTypes.func.isRequired,
  loadNearbyOffers: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
  addOfferToFavorites: PropTypes.func,
  isAuth: PropTypes.bool.isRequired
};

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
