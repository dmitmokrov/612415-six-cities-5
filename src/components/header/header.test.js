import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';
import {BrowserRouter} from 'react-router-dom';

const userInfo = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

describe(`Should Header render correctly`, () => {
  it(`Auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={`AUTH`}
              userInfo={userInfo}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`No auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={`NO_AUTH`}
              userInfo={userInfo}
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
