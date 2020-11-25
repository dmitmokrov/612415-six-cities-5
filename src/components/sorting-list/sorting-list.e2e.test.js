import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SortingList} from "./sorting-list";

configure({adapter: new Adapter()});

it(`Should change sort type on click`, () => {
  const changeSortType = jest.fn();

  const wrapper = shallow(<SortingList
    activeSortType={`Popular`}
    changeSortType={changeSortType}
  />);

  wrapper.find(`.places__option:first-child`).simulate(`click`);
  expect(changeSortType).toHaveBeenCalledTimes(1);
});
