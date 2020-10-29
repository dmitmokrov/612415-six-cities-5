export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersInCity = (offers, city) => offers.filter((offer) => offer.city === city);
