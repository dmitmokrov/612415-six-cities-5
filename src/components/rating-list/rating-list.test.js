import React from 'react';
import renderer from 'react-test-renderer';
import RatingList from './rating-list';

const rating = `4`;

it(`Should RatingList render correctly`, () => {
  const tree = renderer
    .create(<RatingList
      rating={rating}
      onChange={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
