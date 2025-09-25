/*
1. The Animal class's constructor will have two properties: color and energy 

2. The Animal class's prototype will have three methods: isActive(), sleep(), and getColor(). 

3. The isActive() method, whenever run, will lower the value of energy until it hits 0. The isActive() method will also report the updated value of energy. If energy is at zero, the animal object will immediately go to sleep, by invoking the sleep() method based on the said condition. 

4. The getColor() method will just console log the value in the color property. 

5. The Cat class will inherit from Animal, with the additional sound, canJumpHigh, and canClimbTrees properties specific to the Cat class. It will also have its own makeSound() method. 

6. The Bird class will also inherit from Animal, but its own specific properties will be quite different from Cat. Namely, the Bird class will have the sound and the canFly properties, and the makeSound method too. 

7. The HouseCat class will extend the Cat class, and it will have its own houseCatSound as its special property. Additionally, it will override the makeSound() method from the Cat class, but it will do so in an interesting way. If the makeSound() method, on invocation, receives a single option argument - set to true, then it will run super.makeSound() - in other words, run the code from the parent class (Cat) with the addition of running the console.log(this.houseCatSound). Effectively, this means that the makeSound() method on the HouseCat class's instance object will have two separate behaviors, based on whether we pass it true or false. 

8. The Tiger class will also inherit from Cat, and it will come with its own tigerSound property, while the rest of the behavior will be pretty much the same as in the HouseCat class. 

9. Finally, the Parrot class will extend the Bird class, with its own canTalk property, and its own makeSound() method, working with two conditionals: one that checks if the value of true was passed to makeSound during invocation, and another that checks the value stored inside this.canTalk property.  

Now that I have fully explained how all the code in my class hierarchy should work I might start implementing it by adding all the requirements as comments inside the code structure.

At this stage, with all the requirements written down as comments, my code should be as follows:

class Animal {
    // constructor: color, energy
    // isActive()
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()
    // sleep()
        // energy += 20
        // console.log energy
}
class Cat extends Animal {
    // constructor: sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound()
        // console.log sound
}
class Bird extends Animal {
    // constructor: sound, canFly, color, energy
    // makeSound()
        // console.log sound
}
class HouseCat extends Cat {
    // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
}
class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
}
class Parrot extends Bird {
    // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // if (canTalk)
            // console.log("talking!")
}
*/

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
    console.log('Energy is increasing, currently at:', this.energy);
  }
  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = 'purr',
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = 'meow',
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  // makeSound method takes a parameter `option`
  makeSound(option) {
    if (option) {
      super.makeSound(); // Calls the parent class's makeSound if option is true
    }
    console.log(this.houseCatSound); // Always prints the HouseCat sound
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = 'Roar!',
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  // makeSound method takes a parameter `option`
  makeSound(option) {
    if (option) {
      super.makeSound(); // Calls the parent class's makeSound if option is true
    }
    console.log(this.tigerSound); // Always prints the Tiger sound
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  // makeSound method takes a parameter `option`
  makeSound(option) {
    if (option) {
      super.makeSound(); // Calls the parent class's makeSound if option is true
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!"); // If canTalk is true, it talks
    }
  }
}

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

console.log(polly.color); // yellow
console.log(polly.energy); // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird('shriek', false, 'black and white', 200); // setting all the custom properties
console.log(penguin);

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180
penguin.isActive(); // Energy is decreasing, currently at: 160

let leo = new HouseCat();
leo.makeSound(true); // 'purr', 'meow'
leo.makeSound(false); // 'meow'

let simba = new Tiger();
simba.makeSound(true); // 'purr', 'Roar!'
simba.makeSound(false); // 'Roar!'

class Cake {
  constructor(lyr) {
    this.layers = lyr;
  }

  getLayers() {
    return this.layers;
  }
}

class WeddingCake extends Cake {
  constructor() {
    super(2);
  }

  getLayers() {
    return super.getLayers() * 5;
  }
}

var result = new WeddingCake();
console.log(result.getLayers()); //10

class Animal2 {}

class Dog extends Animal2 {
  constructor() {
    super();
    this.noise = 'bark';
  }

  makeNoise() {
    return this.noise;
  }
}

class Wolf extends Dog {
  constructor() {
    super();
    this.noise = 'growl';
  }
}

var result = new Wolf();
console.log(result.makeNoise());
