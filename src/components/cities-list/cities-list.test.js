import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list';

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      city={`London`}
      changeCity={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
