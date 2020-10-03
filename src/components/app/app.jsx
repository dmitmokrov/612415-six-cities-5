import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';

const App = (props) => {
  const {offersCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main offersCount={offersCount}/>
        </Route>
        <Route path='/login' exact>
          <Login/>
        </Route>
        <Route path='/favorites' exact>
          <Favorites/>
        </Route>
        <Route path='/offer/:id?' exact>
          <Offer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
