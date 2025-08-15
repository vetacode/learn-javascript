// var globalVar = 77;

// function scopeTest() {
//   var localVar = 88;
// }

// console.log(localVar);

function meal(animal) {
  animal.food = animal.food + 10;
}

var dog = {
  food: 10,
};
meal(dog);
meal(dog);

console.log(dog.food); //30
//That's correct! Objects in JavaScript are passed by reference. Any changes to the properties of the object inside a function are reflected in the original object. The food value starts at 10. The meal function is called twice which adds 10 to the food value each time. Therefore, 30 is printed.

function two() {
  return 2;
}

function one() {
  return 1;
}

function calculate(initialValue, incrementValue) {
  return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one)); //4
//That's correct!  The  two function is passed as the first parameter to the  calculate function and the  one function is passed as the second parameter. Therefore, when the  calculate function runs, it calls  two() + one() + one() . The result is then  4 .

function scopeTest() {
  var y = 44;

  console.log(x);
}

var x = 33;
scopeTest(); //33
