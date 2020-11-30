import MockAdapter from "axios-mock-adapter";
import {createApi} from "../../../services/api";
import {appData} from "./app-data";
import {ActionType} from "../../action";
import {fetchOffers, fetchOffer, fetchNearbyOffers, fetchComments, addOfferToFavorites} from "../../api-actions";
import {ApiRoute} from "../../../const";
import {adaptToClient, adaptCommentToClient, changeFavoriteStatus} from "../../../utils";

const api = createApi(() => {});

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

const comments = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatar: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  },
  {
    comment: `Big comment`,
    date: `2019-10-08T14:13:56.569Z`,
    id: 2,
    rating: 3,
    user: {
      avatar: `img/4.png`,
      id: 6,
      isPro: true,
      name: `Anton`
    }
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appData(void 0, {})).toEqual({
    offers: [],
    offer: null,
    nearbyOffers: [],
    comments: []
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(appData({
    offers: [],
    offer: null,
    nearbyOffers: [],
    comments: []
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  })).toEqual({
    offers: offers.map(adaptToClient),
    offer: null,
    nearbyOffers: [],
    comments: []
  });
});

it(`Reducer should update offer by load one offer`, () => {
  expect(appData({
    offers: [],
    offer: null,
    nearbyOffers: [],
    comments: []
  }, {
    type: ActionType.LOAD_OFFER,
    payload: offers[0],
  })).toEqual({
    offers: [],
    offer: adaptToClient(offers[0]),
    nearbyOffers: [],
    comments: []
  });
});

it(`Reducer should update nearbyOffers by load nearbyOffers`, () => {
  expect(appData({
    offers: [],
    offer: null,
    nearbyOffers: [],
    comments: []
  }, {
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  })).toEqual({
    offers: [],
    offer: null,
    nearbyOffers: offers.map(adaptToClient),
    comments: []
  });
});

it(`Reducer should update comments by load comments`, () => {
  expect(appData({
    offers: [],
    offer: null,
    nearbyOffers: [],
    comments: []
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  })).toEqual({
    offers: [],
    offer: null,
    nearbyOffers: [],
    comments: comments.map(adaptCommentToClient)
  });
});

it(`Reducer should update favorite status of one offer in offers`, () => {
  expect(appData({
    offers,
    offer: null,
    nearbyOffers: [],
    comments: []
  }, {
    type: ActionType.ADD_OFFER_TO_FAVORITES,
    payload: 1,
  })).toEqual({
    offers: changeFavoriteStatus(offers, 1),
    offer: null,
    nearbyOffers: [],
    comments: []
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(ApiRoute.HOTELS)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const offerLoader = fetchOffer(id);

    apiMock
      .onGet(`${ApiRoute.HOTELS}/${id}`)
      .reply(200, {fake: true});

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API call to /hotels/:hotel_id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const nearbyOffersLoader = fetchNearbyOffers(id);

    apiMock
      .onGet(`${ApiRoute.HOTELS}/${id}/nearby`)
      .reply(200, [{fake: true}]);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/:hotel_id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const commentsLoader = fetchComments(id);

    apiMock
      .onGet(`${ApiRoute.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const favoriteStatusLoader = addOfferToFavorites(id, status);

    apiMock
      .onPost(`${ApiRoute.FAVORITE}/${id}/${status}`)
      .reply(200, {id: 1});

    return favoriteStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_OFFER_TO_FAVORITES,
          payload: 1
        });
      });
  });
});
