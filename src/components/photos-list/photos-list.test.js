import React from 'react';
import renderer from 'react-test-renderer';
import PhotosList from './photos-list';

const photos = [
  `img/1.jpg`,
  `img/2.jpg`,
  `img/3.jpg`,
  `img/4.jpg`
];

it(`Should PhotosList render correctly`, () => {
  const tree = renderer
    .create(<PhotosList
      photos={photos}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
