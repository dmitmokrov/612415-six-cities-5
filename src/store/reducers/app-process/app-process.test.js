import {appProcess} from "./app-process";
import {ActionType} from "../../action";
import {CITIES, SORT_TYPES} from '../../../const';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appProcess(void 0, {})).toEqual({
    city: CITIES[0],
    sortType: SORT_TYPES[0],
    activeCardId: null
  });
});

it(`Reducer should change city`, () => {
  expect(appProcess({
    city: CITIES[0],
    sortType: SORT_TYPES[0],
    activeCardId: null
  }, {
    type: ActionType.CHANGE_CITY,
    payload: CITIES[1],
  })).toEqual({
    city: CITIES[1],
    sortType: SORT_TYPES[0],
    activeCardId: null
  });
});

it(`Reducer should change sort type`, () => {
  expect(appProcess({
    city: CITIES[0],
    sortType: SORT_TYPES[0],
    activeCardId: null
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: SORT_TYPES[2],
  })).toEqual({
    city: CITIES[0],
    sortType: SORT_TYPES[2],
    activeCardId: null
  });
});

it(`Reducer should change active card`, () => {
  expect(appProcess({
    city: CITIES[0],
    sortType: SORT_TYPES[0],
    activeCardId: null
  }, {
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: 3,
  })).toEqual({
    city: CITIES[0],
    sortType: SORT_TYPES[0],
    activeCardId: 3
  });
});

it(`Reducer should reset active card`, () => {
  expect(appProcess({
    city: CITIES[0],
    sortType: SORT_TYPES[0],
    activeCardId: 3
  }, {
    type: ActionType.RESET_ACTIVE_CARD,
    payload: 3,
  })).toEqual({
    city: CITIES[0],
    sortType: SORT_TYPES[0],
    activeCardId: null
  });
});
