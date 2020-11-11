import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';

const App = (props) => {
  const {reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.HOME} exact>
          <MainPage/>
        </Route>
        <Route path={AppRoute.LOGIN} component={LoginPage} exact/>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage/>}
        />
        <Route path={AppRoute.OFFER} exact
          render={(prop) => <OfferPage {...prop} reviews={reviews}/>}
        />
        <Redirect to={AppRoute.HOME}/>
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
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
              author: PropTypes.shape({
                name: PropTypes.string,
                avatar: PropTypes.string
              }),
              comment: PropTypes.string,
              rating: PropTypes.number
            })
        )
      })
  ).isRequired
};

export default App;
