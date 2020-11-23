import React from 'react';
import renderer from 'react-test-renderer';
import FeaturesList from './features-list';

const features = [`water`, `fire`, `bathroom`];

it(`Should FeaturesList render correctly`, () => {
  const tree = renderer
    .create(<FeaturesList
      features={features}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
