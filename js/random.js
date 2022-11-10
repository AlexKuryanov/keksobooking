const getRandomNum = (min, max, numsAfterComma) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return (Math.random() * (max - min) + min).toFixed(numsAfterComma);
};

const getRandomArrayElement = (array) => {
  return array[getRandomNum(0, array.length - 1, 0)];
}

const getRandomArrayLength = (array) => {
  return array.slice(0, getRandomNum(1, array.length - 1))
}

export {getRandomNum, getRandomArrayElement, getRandomArrayLength}
