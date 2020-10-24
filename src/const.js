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
