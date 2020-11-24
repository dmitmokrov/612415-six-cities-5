import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';
import {BrowserRouter} from 'react-router-dom';

describe(`Should Header render correctly`, () => {
  it(`Auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header authorizationStatus={`AUTH`}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`No auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header authorizationStatus={`NO_AUTH`}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
