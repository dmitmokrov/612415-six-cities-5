import React from 'react';
import renderer from 'react-test-renderer';
import ReviewItem from './review-item';

const review = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatar: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`
  }
};

it(`Should ReviewItem render correctly`, () => {
  const tree = renderer
    .create(<ReviewItem
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
