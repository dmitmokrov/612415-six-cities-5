import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Places} from "./places";

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `London`
    },
    description: `Big description`,
    goods: [`Coffee machine`, `Dishwasher`],
    host: {
      avatar: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 3,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: `img/12.png`,
    price: 1420,
    rating: 4.4,
    title: `Big Hotel`,
    type: `home`
  }
];

configure({adapter: new Adapter()});

it(`Should toggle sorting list on click`, () => {
  const onTogglerClick = jest.fn();

  const wrapper = shallow(<Places
    offers={offers}
    sortType={`Popular`}
    city={`Amsterdam`}
    isSortingListOpen={false}
    onTogglerClick={onTogglerClick}
  />);

  wrapper.find(`.places__sorting-type`).simulate(`click`);
  expect(onTogglerClick).toHaveBeenCalledTimes(1);
});
