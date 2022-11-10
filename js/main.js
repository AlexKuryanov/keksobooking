const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow',];

const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];

const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTION = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const TITLES = [
  'Квартира у метро',
  'Уютный дом на берегу озера',
  'Лофт в центре города',
  'Для непритязательных жильцов',
]

const OFFERS_COUNT = 10;

const AvatarCount = {
  MIN: 1,
  MAX: 10,
};

const LatitudeInterval = {
  MIN: 35.65000,
  MAX: 35.70000,
}

const LongitudeInterval = {
  MIN: 139.70000,
  MAX: 139.80000,
}

const Prices = {
  MIN: 1000,
  MAX: 100000,
}

const RoomsCount = {
  MIN: 1,
  MAX: 5,
}

const GuestsCount = {
  MIN: 1,
  MAX: 10,
}

const getRandomNum = (min, max, numsAfterComma) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return (Math.random() * (max - min) + min).toFixed(numsAfterComma);
};

console.log(getRandomCoordinate(0, 0.2, 3));
