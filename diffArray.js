function diffArray(a1, a2) {
  return a1.filter((el) => !a2.includes(el));
}
const one = [0, 9, 3];
const two = [0, 3, 30];

let result = diffArray(one, two);
console.log(result);
