import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAssessment from "./with-user-assessment";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserAssessment(MockComponent);

it(`Should change rating/review`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().rating).toEqual(`0`);
  expect(wrapper.state().review).toEqual(``);

  // Вызов onChange ???
});
