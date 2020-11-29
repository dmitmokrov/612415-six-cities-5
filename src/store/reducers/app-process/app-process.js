import {ActionType} from '../../action';
import {cities, sortTypes} from '../../../const';
import {extend} from '../../../utils';

const initialState = {
  city: cities[0],
  sortType: sortTypes[0],
  activeCardId: null
};

const appProcess = (state = initialState, action) => {
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

    case ActionType.CHANGE_ACTIVE_CARD:
      return extend(
          state,
          {
            activeCardId: action.payload
          }
      );

    case ActionType.RESET_ACTIVE_CARD:
      return extend(
          state,
          {
            activeCardId: null
          }
      );
  }

  return state;
};

export {appProcess};
