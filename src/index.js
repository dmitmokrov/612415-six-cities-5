import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
// import {ActionType} from './store/action';
import {fetchOffers} from './store/api-actions';

const api = createApi();

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)))
);

Promise.all([
  store.dispatch(fetchOffers())
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App
            offers={offers}
            reviews={reviews}
          />
        </Provider>,
        document.querySelector(`#root`)
    );
  });
