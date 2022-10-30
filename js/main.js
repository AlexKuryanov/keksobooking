const getRandomCoordinate = (min, max, numsAfterComma) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    // let num = min;
    // min = max;
    // max = num;
    // деструктуризация:
    [min, max] = [max, min];
  }
  return (Math.random() * (max - min) + min).toFixed(numsAfterComma);
};

console.log(getRandomCoordinate(0, 0.2, 3));
