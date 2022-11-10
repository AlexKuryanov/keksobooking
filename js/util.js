import {OFFER_TYPES, CHECKIN_TIMES, CHECKOUT_TIMES, FEATURES, DESCRIPTIONS, PHOTOS, TITLES, OFFERS_COUNT, Prices, RoomsCount, GuestsCount} from './data.js';
import { getRandomNum, getRandomArrayElement, getRandomArrayLength } from './random.js';
import { Location } from './location.js';

const offers = [];
const createOffer = () => {
  for (let i = 1; i <= OFFERS_COUNT; i++) {
    offers.push({
      author: {
        avatar: `img/avatars/user${i < 10 ? '0' + i : i}.png`,
      },
      offer: {
        title: `${getRandomArrayElement(TITLES)}`,
        address: `${Location.X}, ${Location.Y}`,
        price: +getRandomNum(Prices.MIN, Prices.MAX, 0),
        type: `${getRandomArrayElement(OFFER_TYPES)}`,
        rooms: +getRandomNum(RoomsCount.MIN, RoomsCount.MAX, 0),
        guests: +getRandomNum(GuestsCount.MIN, GuestsCount.MAX, 0),
        checkin: `${getRandomArrayElement(CHECKIN_TIMES)}`,
        checkout: `${getRandomArrayElement(CHECKOUT_TIMES)}`,
        features: getRandomArrayLength(FEATURES),
        description: `${getRandomArrayElement(DESCRIPTIONS)}`,
        photos: getRandomArrayLength(PHOTOS),
      },
      location: {
        x: Location.X,
        y: Location.Y,
      }
    })
  }

  return offers;
}

createOffer();

export {offers}
