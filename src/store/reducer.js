import {ActionType} from './action';
import {offers} from '../mocks/offers';
import {cities, sortTypes} from '../const';
import {extend} from '../utils';

const initialState = {
  city: cities[0],
  offers,
  sortType: sortTypes[0]
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

    case ActionType.CHANGE_SORT_TYPE:
      return extend(
          state,
          {
            sortType: action.payload
          }
      );

    default:
      return state;
  }
};

export {reducer};
