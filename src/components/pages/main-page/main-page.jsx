import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../../offers-list/offers-list';
import CitiesList from '../../cities-list/cities-list';
import SortingList from '../../sorting-list/sorting-list';
import Map from '../../map/map';
import {connect} from 'react-redux';
import {getOffersInCity, getOffersBySortType} from '../../../utils';

const MainPage = (props) => {
  const {city, offers, sortType} = props;

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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  {sortType}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortingList/>
              </form>

              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers}/>
              </div>

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={offers}/>
              </section>
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
  sortType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: getOffersBySortType(getOffersInCity(state.offers, state.city), state.sortType),
  sortType: state.sortType
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
