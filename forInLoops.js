// Unlike for...of, which works on values, for...in works on keys of objects or indices of arrays.
//for...in loop iterates over prototype chain properties as well, which can lead to unexpected results if not handled properly.
// It's generally used for iterating over object properties, not for arrays.
//for..in.. loop example
const car = { speed: 100, color: 'blue' };

for (let key in car) {
  console.log(key); // Output: speed, color
}
