function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function (taste) {
    console.log(`The ${this.flavor} icecream has melted and it is:`, taste);
  };
}

let kiwiIcecream = new Icecream('kiwi');
let appleIcecream = new Icecream('apple');
kiwiIcecream.meltIt('sour'); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream.meltIt('nice'); // --> Icecream {flavor: 'apple', meltIt: ƒ}

console.log(new String('apple') === new String('apple')); // false
console.log('apple' === 'apple'); // true

console.log('abcdef'.match(/d/));

new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
