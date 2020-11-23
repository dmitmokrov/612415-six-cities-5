import React from 'react';
import renderer from 'react-test-renderer';
import CityItem from './city-item';

const noop = () => {};
const city = `London`;

describe(`Should CityItem render correctly`, () => {
  it(`Active`, () => {
    const tree = renderer
      .create(<CityItem
        city={city}
        isActive={true}
        changeCity={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Not active`, () => {
    const tree = renderer
      .create(<CityItem
        city={city}
        isActive={false}
        changeCity={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
