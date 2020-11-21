import React from 'react';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const App = () => {
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
        <Route
          exact
          path={AppRoute.OFFER}
          render={(prop) => <OfferPage {...prop}/>}
        />
        <Redirect to={AppRoute.HOME}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
