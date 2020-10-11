import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const offersCount = 312;

ReactDOM.render(
    <App
      offers={offers}
      offersCount={offersCount}
    />,
    document.querySelector(`#root`)
);
