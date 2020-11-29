export const OfferType = {
  APARTMENT: `Apartment`,
  PRIVATE_ROOM: `Private room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const AppRoute = {
  HOME: `/`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  OFFER: `/offer/:id`
};

export const ApiRoute = {
  HOTELS: `/hotels`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`
};

export const CardTypeOptions = {
  DEFAULT: {
    cardClassName: `cities__place-card`,
    isHiddenPremiumMark: false,
    imageWrapperClassName: `cities__image-wrapper`,
    imageParams: {
      width: `260`,
      height: `200`
    },
    bookmarkPrefix: `To`
  },
  FAVORITE: {
    cardClassName: `favorites__card`,
    isHiddenPremiumMark: true,
    imageWrapperClassName: `favorites__image-wrapper`,
    imageParams: {
      width: `150`,
      height: `110`
    },
    bookmarkPrefix: `In`
  },
  NEAR: {
    cardClassName: `near-places__card`,
    isHiddenPremiumMark: true,
    imageWrapperClassName: `near-places__image-wrapper`,
    imageParams: {
      width: `260`,
      height: `200`
    },
    bookmarkPrefix: `To`
  }
};

export const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const CityCoords = {
  PARIS: [48.85341, 2.34],
  COLOGNE: [50.93333, 6.95],
  BRUSSELS: [50.85045, 4.35],
  AMSTERDAM: [52.38333, 4.9],
  HAMBURG: [53.57532, 10.01],
  DUSSELDORF: [51.22172, 6.77]
};

export const sortTypes = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ratingList = [`5`, `4`, `3`, `2`, `1`];

export const FavoriteStatus = {
  FAVORITE: 1,
  NOT_FAVORITE: 0
};
