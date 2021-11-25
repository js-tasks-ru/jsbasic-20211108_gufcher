function getMinMax(str) {
  let arrayFromString = str.split(' ').map(element => +element).filter(element => !isNaN(element));
  let maxValue = arrayFromString[0];
  let minValue = arrayFromString[0];
  for (let key of arrayFromString) {
    if (key > maxValue) {
      maxValue = key;
    }
  }
  for (let key of arrayFromString) {
    if (key < minValue) {
      minValue = key;
    }
  }
  return {
    min: minValue,
    max: maxValue,
  };
}
