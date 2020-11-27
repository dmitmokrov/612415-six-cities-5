import React from 'react';
import renderer from 'react-test-renderer';
import {LoginPage} from './login-page';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {NameSpace} from '../../../store/reducers/root-reducer';
import {cities, sortTypes, AuthorizationStatus} from '../../../const';

const mockStore = configureStore();

const noop = () => {};

it(`Should LoginPage render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers: [],
      offer: null,
      nearbyOffers: [],
      comments: []
    },
    [NameSpace.PROCESS]: {
      city: cities[0],
      sortType: sortTypes[0],
      activeCardId: null
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage onSubmit={noop}/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
