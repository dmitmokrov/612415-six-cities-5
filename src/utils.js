export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        previewImage: offer.preview_image,
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        guestsMaxCount: offer.max_adults,
        host: Object.assign(
            {},
            offer.host,
            {
              avatar: offer.host.avatar_url,
              isPro: offer.host.is_pro
            }
        )
      }
  );

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
};

export const adaptCommentToClient = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        user: Object.assign(
            {},
            comment.user,
            {
              avatar: comment.user.avatar_url,
              isPro: comment.user.is_pro
            }
        )
      }
  );

  delete adaptedComment.user.avatar_url;
  delete adaptedComment.user.is_pro;

  return adaptedComment;
};

const sortArrayFunction = (a, b) => a - b;

export const isArraysEqual = (arr1, arr2) => {
  arr1.sort(sortArrayFunction);
  arr2.sort(sortArrayFunction);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

export const changeFavoriteStatus = (offers, id) => {
  const index = offers.findIndex((it) => it.id === id);
  const updatedOffer = offers[index];
  const isFavorite = updatedOffer.isFavorite;
  updatedOffer.isFavorite = !isFavorite;
  return [...offers.slice(0, index), updatedOffer, ...offers.slice(index + 1)];
};
