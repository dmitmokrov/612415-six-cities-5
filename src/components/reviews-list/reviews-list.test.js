import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';

const comments = [
  {
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
  },
  {
    comment: `A quiet river by the unique lightness of Amsterdam.`,
    date: `2019-09-08T14:13:56.569Z`,
    id: 2,
    rating: 2,
    user: {
      avatar: `img/2.png`,
      id: 1,
      isPro: true,
      name: `Dmitry`
    }
  }
];

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      comments={comments}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
