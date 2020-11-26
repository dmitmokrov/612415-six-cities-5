import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import CitiesList from '../../cities-list/cities-list';
import Map from '../../map/map';
import NoPlaces from '../../no-places/no-places';
import Places from '../../places/places';
import {connect} from 'react-redux';
import {getCity, getSortType, getOffersInCityBySortType, getActiveCardId} from '../../../store/selectors';

const MainPage = (props) => {
  const {city, offers, sortType, activeCardId} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>

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
                  <Map city={city} offers={offers} activeCardId={activeCardId} withLayer={false}/>
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
  city: getCity(state),
  offers: getOffersInCityBySortType(state),
  sortType: getSortType(state),
  activeCardId: getActiveCardId(state)
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
