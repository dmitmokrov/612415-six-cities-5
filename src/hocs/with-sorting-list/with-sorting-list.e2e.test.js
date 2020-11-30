import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSortingList from "./with-sorting-list";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withSortingList(MockComponent);

it(`Should open/close sorting list`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().isSortingListOpen).toEqual(false);
});
