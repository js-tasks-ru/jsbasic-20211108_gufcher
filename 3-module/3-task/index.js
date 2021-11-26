function camelize(str) {
  let newArrayFromString = str.split('-');
  return newArrayFromString.map((a, b) => b == 0 ? a : a[0].toUpperCase() + a.slice(1)).join('');
}
