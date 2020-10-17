import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import FavoritesList from '../../favorites-list/favorites-list';
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
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritesList offers={offers}/>
                </div>
              </li>
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

export default FavoritesPage;
