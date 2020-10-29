import {ActionType} from './action';
import {offers} from '../mocks/offers';
import {cities} from '../const';
import {extend} from '../utils';

const initialState = {
  city: cities[0],
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

    default:
      return state;
  }
};

export {reducer};
