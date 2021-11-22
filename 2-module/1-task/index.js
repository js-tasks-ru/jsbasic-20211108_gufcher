function sumSalary(salaries) {
  let sumResult = 0;
  for (let key in salaries) {
    let sum = salaries[key];
    if (typeof sum === 'number' && isFinite(sum)) {
      sumResult += salaries[key];
    }
  }
  return sumResult;
}
