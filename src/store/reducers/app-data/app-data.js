import {ActionType} from '../../action';
import {extend, adaptToClient} from '../../../utils';

const initialState = {
  offers: [],
  offer: null,
  nearbyOffers: []
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
  }

  return state;
};

export {appData};
