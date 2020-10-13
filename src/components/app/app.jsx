import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';

const App = (props) => {
  const {offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainPage offers={offers}/>
        </Route>
        <Route path='/login' component={LoginPage} exact/>
        <Route path='/favorites' exact>
          <FavoritesPage offers={offers.filter((offer) => offer.isFavorite)}/>
        </Route>
        <Route path='/offer/:id' exact>
          <OfferPage offer={offers[0]} reviews={reviews[0]}/>
        </Route>
        <Redirect to='/'/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        type: PropTypes.oneOf([`Apartment`, `Private room`, `House`, `Hotel`]),
        price: PropTypes.number,
        rating: PropTypes.number,
        isPremium: PropTypes.bool,
        bedroomsCount: PropTypes.number,
        guestsMaxCount: PropTypes.number,
        features: PropTypes.arrayOf(PropTypes.string),
        photos: PropTypes.arrayOf(PropTypes.string),
        host: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string,
          isSuper: PropTypes.bool
        })
      })
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.shape({
            author: PropTypes.shape({
              name: PropTypes.string,
              avatar: PropTypes.string
            }),
            comment: PropTypes.string,
            rating: PropTypes.number
          })
      )
  )
};

export default App;
