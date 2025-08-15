const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

// Using forEach directly to iterate over an array
fruits.forEach(function (fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
});

//with arrow function
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
