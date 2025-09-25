const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
// Using forEach to iterate over an array
fruits.forEach(appendIndex);

// Using a for loop to iterate over an array
for (let i = 0; i < fruits.length; i++) {
  appendIndex(fruits[i], i);
  s;
  console.log(`${i + 1}. ${fruits[i]}`);
}

// Using forEach directly to iterate over an array
fruits.forEach(function (fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
});

//with arrow function
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
