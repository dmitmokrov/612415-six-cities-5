import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';

const cardOptions = {
  cardClassName: `cities__place-card`,
  isHiddenPremiumMark: false,
  imageWrapperClassName: `cities__image-wrapper`,
  imageParams: {
    width: `260`,
    height: `200`
  },
  bookmarkPrefix: `To`
};
const offer = {
  id: 1,
  isPremium: false,
  previewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
};
const noop = () => {};

it(`Should Card render correctly`, () => {
  const tree = renderer
    .create(<Card
      cardOptions={cardOptions}
      offer={offer}
      changeActiveCard={noop}
      resetActiveCard={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
