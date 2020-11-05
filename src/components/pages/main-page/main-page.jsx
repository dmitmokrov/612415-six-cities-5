import React from 'react';
import PropTypes from 'prop-types';
import CitiesList from '../../cities-list/cities-list';
import Map from '../../map/map';
import NoPlaces from '../../no-places/no-places';
import Places from '../../places/places';
import {connect} from 'react-redux';
import {getOffersInCity, getOffersBySortType} from '../../../utils';

const MainPage = (props) => {
  const {city, offers, sortType, activeCardId} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${!offers.length && `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container ${!offers.length && `cities__places-container--empty`} container`}>
            {
              offers.length === 0 ? <NoPlaces/> : <Places offers={offers} city={city} sortType={sortType}/>
            }

            <div className="cities__right-section">
              {
                offers.length &&
                <section className="cities__map map">
                  <Map city={city} offers={offers} activeCardId={activeCardId}/>
                </section>
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired,
  activeCardId: PropTypes.number
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: getOffersBySortType(getOffersInCity(state.offers, state.city), state.sortType),
  sortType: state.sortType,
  activeCardId: state.activeCardId
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
