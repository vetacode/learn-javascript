//ES5 template literals are not supported, so we use string concatenation.

var greet = 'Hello';
var place = 'World';
console.log(greet + ' ' + place + '!');

//ES6 Template literals are enclosed by backticks (`) and can contain placeholders indicated by the dollar sign
// Using template literals for cleaner syntax
console.log(`Template Literal: ${greet} ${place}!`);

// Including expressions within template literals
console.log(
  `This is a template literal with an expression: ${
    greet.length + place.length
  }`
);
console.log(`${1 + 1 + 1 + 1 + 1} stars!`);

// Multi-line template literal
console.log(`Hello,
World
!
`);
console.log(`This is a 
  multi-line template literal.`);

// Using template literals with functions
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(greetUser('Alice'));
