//SPREAD OP: instead of using push() and pop(), spread operator can:
// Add new members to arrays without using the push() method

//Note that the spread operator only performs a shallow copy of the source array or object. For more information on this, please refer to the additional reading.

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//Convert a string to an array
const greeting = 'Hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//Copy either an object or an array into a separate object
const car1 = {
  speed: 200,
  color: 'yellow',
};
const car2 = { ...car1 };

car1.speed = 201;

console.log(car1.speed);
console.log(car2.speed);

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, 'not', fruits2); //

let obj = {
  key: 1,
  value: 4,
};
let output = { ...obj };
output.value -= obj.key;

console.log(output.value);
console.log(obj.value); // 4, original object remains unchanged

//easy to join arrays
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

//easy to join objects
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}

//REST operator is used to collect all remaining elements into an array. gather multiple elements into a single array or object. It's useful for handling remaining items in destructuring or collecting arguments in functions.

const [first, ...rest] = [1, 2, 3, 4];

console.log(first); // 1
console.log(rest); // [2, 3, 4]
console.log(rest.length); // 3

//in a function to collect arguments:
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

function count(...food) {
  console.log(food.length);
}

count('Burgers', 'Fries', null); //3

/*Differences between spread and rest operators
Spread Operator:
1. Expands arrays, objects, or strings into individual elements or properties.
2. Used for concatenation, copying, or passing arguments.

Rest Operator:
1. Gathers multiple elements into a single array or object.
2. Used in destructuring or collecting function arguments.
*/
