let bird = {
  hasFeathers: true,
  canFly: true,
  canSwim: false,
};

// let eagle = new Bird();
// eagle.hasFeathers();

let eagle = Object.create(bird);
console.log(eagle.hasFeathers); // true
console.log(eagle.canFly); // true
console.log(eagle.canSwim); // false

Object.getPrototypeOf(eagle) === bird; // true
console.log(Object.getPrototypeOf(eagle)); //{ hasFeathers: true, canFly: true, canSwim: false }
console.log(this.eagle);

let penguin = Object.create(bird);
penguin.canFly = false;
penguin.canSwim = true;

console.log(penguin.hasFeathers); // true
console.log(penguin.canFly); // false
console.log(penguin.canSwim); // true
