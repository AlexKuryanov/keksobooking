import {LatitudeInterval, LongitudeInterval} from './data.js';
import { getRandomNum } from './random.js';

const Location = {
  X: +getRandomNum(LatitudeInterval.MIN, LatitudeInterval.MAX, 5),
  Y: +getRandomNum(LongitudeInterval.MIN, LongitudeInterval.MAX, 5),
}

export {Location}

