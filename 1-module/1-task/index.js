function factorial(n) {
  let a = 1;
  while (n > 0) {
    a *= n;
    n--;
  }
  return a;
}
