import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {NameSpace} from '../../store/reducers/root-reducer';
import {CITIES, SORT_TYPES, AuthorizationStatus} from '../../const';
import CardsList from './cards-list';

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `London`
    },
    description: `Big description`,
    goods: [`Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 3,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/12.png`,
    price: 1420,
    rating: 4.4,
    title: `Big Hotel`,
    type: `home`
  }
];

const mockStore = configureStore();

it(`Should CardsList render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers: [],
      offer: null,
      nearbyOffers: [],
      comments: []
    },
    [NameSpace.PROCESS]: {
      city: CITIES[0],
      sortType: SORT_TYPES[0],
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
            <CardsList offers={offers}/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
