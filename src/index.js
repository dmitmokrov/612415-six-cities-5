import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import App from './components/app/app';
import rootReducer from './store/reducers/root-reducer';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {fetchOffers, checkAuth} from './store/api-actions';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {redirect} from './store/redirect';

const api = createApi(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
));

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
