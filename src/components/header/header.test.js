import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';

describe(`Should Header render correctly`, () => {
  it(`Auth`, () => {
    const tree = renderer
      .create(<Header
        authorizationStatus={`AUTH`}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`No auth`, () => {
    const tree = renderer
      .create(<Header
        authorizationStatus={`NO_AUTH`}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
