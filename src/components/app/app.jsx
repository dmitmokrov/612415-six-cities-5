import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';

const App = (props) => {
  const {offersCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainPage offersCount={offersCount}/>
        </Route>
        <Route path='/login' component={LoginPage} exact/>
        <Route path='/favorites' component={FavoritesPage} exact/>
        <Route path='/offer/:id' component={OfferPage} exact/>
        <Redirect to='/'/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
