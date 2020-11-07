import {createSelector} from 'reselect';

export const getCity = (state) => state.PROCESS.city;
export const getSortType = (state) => state.PROCESS.sortType;
export const getActiveCardId = (state) => state.PROCESS.activeCardId;
export const getOffers = (state) => state.DATA.offers;

export const getFavoriteOffers = createSelector(
    getOffers,
    (offers) => offers.filter((offer) => offer.isFavorite)
);
