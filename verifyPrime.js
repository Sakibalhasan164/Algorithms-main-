function prime(n) {
  let divisor = 2;

  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}
let number = 6;
let result = prime(number);
console.log(result);
function primeFactors(m) {
  let factors = [];
  let divisor = 2;
  while (m > divisor) {
    m % divisor === 0 ? factors.push(divisor) : divisor++;
  }
  return factors;
}
let factors = primeFactors(number);
console.log(factors);
