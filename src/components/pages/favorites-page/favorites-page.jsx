import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../../header/header';
import FavoritesCities from '../../favorites-cities/favorites-cities';
import {AppRoute} from '../../../const';

const FavoritesPage = (props) => {
  const {offers} = props;

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesCities offers={offers}/>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.HOME}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.array.isRequired
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers.filter((offer) => offer.isFavorite)
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
