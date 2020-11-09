import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import PhotosList from '../../photos-list/photos-list';
import FeaturesList from '../../features-list/features-list';
import ReviewsList from '../../reviews-list/reviews-list';
import ReviewForm from '../../review-form/review-form';
import Map from '../../map/map';
import CardsList from '../../cards-list/cards-list';
import {CardTypeOptions} from '../../../const';
import {getCity, getOffers, getActiveCardId} from '../../../store/selectors';

const OfferPage = (props) => {
  const {offers, activeCardId, reviews} = props;
  const offer = offers.find((elem) => elem.id.toString() === props.match.params.id);
  const review = reviews.find((elem) => elem.id.toString() === props.match.params.id);
  const {city, title, description, type, price, rating, isPremium, bedrooms, guestsMaxCount, goods, images, host} = offer;
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
                <button className="property__bookmark-button button" type="button">
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
                {review &&
                  <Fragment>
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{review.comments.length}</span></h2>
                    <ul className="reviews__list">
                      <ReviewsList reviews={review.comments}/>
                    </ul>
                  </Fragment>
                }

                <ReviewForm/>

              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city.name} offers={offers.slice(0, 3)} activeCardId={activeCardId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList cardOptions={CardTypeOptions.NEAR} offers={offers.slice(0, 3)}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
  activeCardId: getActiveCardId(state)
});

OfferPage.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  activeCardId: PropTypes.number,
  reviews: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(OfferPage);
