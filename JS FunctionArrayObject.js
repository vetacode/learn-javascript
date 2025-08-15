/*
function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log('Found the', match, 'at', i);
    } else {
      console.log('---No match found at', i);
    }
  }
}

letterFinder('test', 't');

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
  speed: 100,
  altitude: 200,
  color: 'red',
};
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}
  

var clothes = [];
clothes.push('giordano', 'levis', 'uniqlo', 'zara', 'gap');
// clothes.push('levis');
// clothes.push('uniqlo');
// clothes.push('zara');
// clothes.push('gap');
clothes.pop();
clothes.push('adidas');
console.log(clothes);

var favCar = {};
favCar.color = 'red';
favCar.convertible = true;
console.log(favCar);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = 'red';
console.log(car);
car.turnTheKey = function () {
  console.log('The engine is running');
};
car.lightsOn = function () {
  console.log('The lights are on.');
};
console.log(car);
car.turnTheKey();
car.lightsOn();



//create the most simple object
var person = {};

//add properties to the object
var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

//or using ES6 shorthand method syntax
var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

person.bio();
person.introduceSelf();


const person = {
  name: {
    first: 'Bob',
    last: 'Smith',
  },
  // …
};

person.name.first;
person.name.last;
*/

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

createPerson('Andy').introduceSelf();
const andy = createPerson('Andy');
andy.introduceSelf();

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
const bob = new Person('Bob');
bob.introduceSelf();
