import React from 'react';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const App = (props) => {
  const {reviews} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.HOME} exact>
          <MainPage/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.LOGIN}
          isAuthRequired={false}
          redirectRoute={AppRoute.HOME}
          render={() => <LoginPage/>}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          isAuthRequired={true}
          redirectRoute={AppRoute.LOGIN}
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
