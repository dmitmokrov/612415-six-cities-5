import React from 'react';
import renderer from 'react-test-renderer';
import {SortingList} from './sorting-list';

it(`Should SortingList render correctly`, () => {
  const tree = renderer
    .create(<SortingList
      activeSortType={`Popular`}
      changeSortType={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
