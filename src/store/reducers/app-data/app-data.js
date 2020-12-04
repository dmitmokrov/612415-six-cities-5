import {ActionType} from '../../action';
import {extend, adaptToClient, adaptCommentToClient, changeFavoriteStatus} from '../../../utils';

const initialState = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  comments: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(
          state,
          {
            offers: action.payload.map(adaptToClient)
          }
      );

    case ActionType.LOAD_OFFER:
      return extend(
          state,
          {
            offer: adaptToClient(action.payload)
          }
      );

    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(
          state,
          {
            nearbyOffers: action.payload.map(adaptToClient)
          }
      );

    case ActionType.LOAD_COMMENTS:
      return extend(
          state,
          {
            comments: action.payload.map(adaptCommentToClient)
          }
      );

    case ActionType.ADD_OFFER_TO_FAVORITES:
      return extend(
          state,
          {
            offers: changeFavoriteStatus(state.offers, adaptToClient(action.payload)),
            offer: state.offer && adaptToClient(action.payload)
          }
      );
  }

  return state;
};

export {appData};
