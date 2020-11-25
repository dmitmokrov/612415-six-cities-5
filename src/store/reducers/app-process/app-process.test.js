import {appProcess} from "./app-process";
import {ActionType} from "../../action";
import {cities, sortTypes} from '../../../const';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appProcess(void 0, {})).toEqual({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: null,
    favorites: []
  });
});

it(`Reducer should change city`, () => {
  expect(appProcess({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: null,
    favorites: []
  }, {
    type: ActionType.CHANGE_CITY,
    payload: cities[1],
  })).toEqual({
    city: cities[1],
    sortType: sortTypes[0],
    activeCardId: null,
    favorites: []
  });
});

it(`Reducer should change sort type`, () => {
  expect(appProcess({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: null,
    favorites: []
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortTypes[2],
  })).toEqual({
    city: cities[0],
    sortType: sortTypes[2],
    activeCardId: null,
    favorites: []
  });
});

it(`Reducer should change active card`, () => {
  expect(appProcess({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: null,
    favorites: []
  }, {
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: 3,
  })).toEqual({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: 3,
    favorites: []
  });
});

it(`Reducer should reset active card`, () => {
  expect(appProcess({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: 3,
    favorites: []
  }, {
    type: ActionType.RESET_ACTIVE_CARD,
    payload: 3,
  })).toEqual({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: null,
    favorites: []
  });
});

it(`Reducer should add offer to favorites`, () => {
  expect(appProcess({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: null,
    favorites: []
  }, {
    type: ActionType.ADD_OFFER_TO_FAVORITES,
    payload: {fake: true},
  })).toEqual({
    city: cities[0],
    sortType: sortTypes[0],
    activeCardId: null,
    favorites: [{fake: true}]
  });
});
