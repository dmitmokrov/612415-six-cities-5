import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from './review-form';

const comment = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`;
const rating = `2`;
const noop = () => {};

describe(`Should ReviewForm render correctly`, () => {
  it(`With disabled button`, () => {
    const tree = renderer
      .create(<ReviewForm
        comment={comment}
        rating={rating}
        isSubmitButtonDisabled={true}
        onChange={noop}
        onSubmit={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With not disabled button`, () => {
    const tree = renderer
      .create(<ReviewForm
        comment={comment}
        rating={rating}
        isSubmitButtonDisabled={false}
        onChange={noop}
        onSubmit={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
