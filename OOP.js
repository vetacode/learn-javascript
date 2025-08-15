/*

//creating an object
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

//OOP Polimorphism Example
const door = {
  bell: function () {
    return 'Ding Dong!';
  },
};

console.log(door.bell()); // 'Ding Dong!'

function ringBell(butyrateType) {
  console.log(butyrateType.bell());
}

ringBell(door);

console.log('abc'.concat('def')); // 'abcdef'
console.log(['abc'].concat(['def'])); // ['abc', 'def']

//using the + operator with arrays does not perform true concatenation. Instead, it coerces the arrays into strings before joining them and elements are separated by commas.
console.log(['abc'] + ['def']); // "abc,def");

class Bird {
  useWings() {
    console.log('Flying!');
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log('Barely flapping!');
  }
}
class Penguin extends Bird {
  useWings() {
    console.log('Diving!');
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// create your classes here
class FeedAdd {
  gutEnhancer(butyrateType) {
    console.log('Dry Feces, Great Performance because of:', butyrateType);
  }
}

class ButyricAcid extends FeedAdd {
  gutEnhancer(butyrateType) {
    super.gutEnhancer(butyrateType);
    console.log('Regenerative Villi');
  }
}

class Probiotics extends FeedAdd {
  gutEnhancer() {
    console.log('Competitive Exclusion');
  }
}

const globamax = new ButyricAcid();
const calsporin = new Probiotics();

globamax.gutEnhancer('calciumButyrate');
calsporin.gutEnhancer();

*/

//OOP, Class Subclass Example -------------------------------------------------

class Animal {
  constructor(color = 'yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log('Energy is decreasing, currently at:', this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log(
      `${this.color} animal is sleeping. Energy is increasing, currently at ${this.energy}.`
    );
  }
  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    color,
    energy,
    sound = 'purr',
    canJumpHigh = true,
    canClimbTrees = true
  ) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound() {
    console.log(`${this.color} cat says ${this.sound}.`);
  }
}

class Bird extends Animal {
  constructor(color, energy, sound = 'chirp', canFly = true) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(`${this.color} bird says ${this.sound}.`);
  }
}

class HouseCat extends Cat {
  constructor(
    color,
    energy,
    sound,
    canJumpHigh,
    canClimbTrees,
    houseCatSound = 'meow'
  ) {
    super(color, energy, sound, canJumpHigh, canClimbTrees);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    color,
    energy,
    sound,
    canClimbTrees,
    canJumpHigh,
    tigerSound = 'Roar!'
  ) {
    super(color, energy, sound, canClimbTrees, canJumpHigh);
    this.tigerSound = tigerSound;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = 'true', color, energy, sound, canFly) {
    super(color, energy, sound, canFly);
    this.canTalk = canTalk;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }

    if (this.canTalk) {
      console.log(`${this.color} parrot can talk and says ${this.sound}.`);
    }
  }
}

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird('shriek', false, 'black and white', 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180
