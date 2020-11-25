import React from 'react';
import renderer from 'react-test-renderer';
import {PrivateRoute} from './private-route';
import {BrowserRouter} from 'react-router-dom';

it(`Should PrivateRoute render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PrivateRoute
            render={() => {}}
            path={`/123`}
            exact={true}
            isAuthRequired={true}
            redirectRoute={`/`}
            authorizationStatus={`AUTH`}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
