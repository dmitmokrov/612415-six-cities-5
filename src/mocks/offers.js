import {OfferType} from '../const';

export const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: OfferType.APARTMENT,
    price: 120,
    rating: 4,
    isPremium: true,
    isFavorite: true,
    bedroomsCount: 4,
    guestsMaxCount: 4,
    features: [`Wi-Fi`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`],
    photos: [`https://dummyimage.com/260x200/00f.jpg&text=1`, `https://dummyimage.com/260x200/0f0.jpg&text=2`, `https://dummyimage.com/260x200/0ff.jpg&text=3`, `https://dummyimage.com/260x200/f00.jpg&text=4`, `https://dummyimage.com/260x200/f0f.jpg&text=5`, `https://dummyimage.com/260x200/ff0.jpg&text=6`],
    host: {
      name: `Angelina`,
      avatar: `https://www.fillmurray.com/100/100`,
      isSuper: true
    },
    coords: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    city: `Amsterdam`,
    title: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: OfferType.PRIVATE_ROOM,
    price: 80,
    rating: 3,
    isPremium: false,
    isFavorite: true,
    bedroomsCount: 1,
    guestsMaxCount: 3,
    features: [`Wi-Fi`, `Washing machine`, `Towels`],
    photos: [`https://dummyimage.com/260x200/0f0.jpg&text=1`, `https://dummyimage.com/260x200/0ff.jpg&text=2`, `https://dummyimage.com/260x200/f00.jpg&text=3`, `https://dummyimage.com/260x200/f0f.jpg&text=4`],
    host: {
      name: `David`,
      avatar: `https://www.fillmurray.com/105/105`,
      isSuper: true
    },
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    city: `Hamburg`,
    title: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: OfferType.HOTEL,
    price: 132,
    rating: 4,
    isPremium: false,
    isFavorite: false,
    bedroomsCount: 3,
    guestsMaxCount: 5,
    features: [`Wi-Fi`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    photos: [`https://dummyimage.com/260x200/0ff.jpg&text=1`, `https://dummyimage.com/260x200/f00.jpg&text=2`, `https://dummyimage.com/260x200/f0f.jpg&text=3`],
    host: {
      name: `Max`,
      avatar: `https://www.fillmurray.com/110/110`,
      isSuper: true
    },
    coords: [53.575322344345, 10.0156755]
  },
  {
    id: 4,
    city: `Paris`,
    title: `Nice, cozy, warm big bed apartment`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: OfferType.HOUSE,
    price: 180,
    rating: 5,
    isPremium: true,
    isFavorite: true,
    bedroomsCount: 2,
    guestsMaxCount: 2,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Fridge`],
    photos: [`https://dummyimage.com/260x200/f00.jpg&text=1`, `https://dummyimage.com/260x200/f0f.jpg&text=2`, `https://dummyimage.com/260x200/ff0.jpg&text=3`, `https://dummyimage.com/260x200/00f.jpg&text=4`],
    host: {
      name: `Bruce`,
      avatar: `https://www.fillmurray.com/120/120`,
      isSuper: true
    },
    coords: [48.85341345465, 2.34234468789]
  }
];
