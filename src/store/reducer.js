import {ActionType} from './action';
import {offers} from '../mocks/offers';
import {City} from '../const';
import {extend} from '../utils';

const initialState = {
  city: City.AMSTERDAM,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(
          state,
          {
            city: action.payload
          }
      );

    case ActionType.GET_OFFERS:
      return extend(
          state,
          {
            offers: offers.filter((offer) => offer.city === state.city)
          }
      );

    default:
      return state;
  }
};

export {reducer};
