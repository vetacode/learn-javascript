// console.log(a + b);
// console.log('this line is never reached because of the error above');

// try {
//   console.log(a + b);
// } catch (err) {
//   console.log('The Error caught is ' + err);
//   console.log('the error is caught and saved in the variable "err"');
// }
// console.log('this line is reached after the error is caught');

// try {
//   throw new RefferenceError();
// } catch (err) {
//   console.log('The Error caught is ' + err);
//   console.log('the error is caught and saved in the variable "err"');
// }

// console.log('this line is runs');

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error('Division by zero is not allowed.');
//   }
//   return a / b;
// }

// try {
//   console.log(divide(5, 0));
// } catch (error) {
//   console.error(error.message); // Division by zero is not allowed.
// }

//NULL UNDEFINED AND EMPTY VALUES

// var letters = 'abc';
// letters.match(/a/); //array(1) [ "a", index: 0, input: "abc" ]

// var letters = 'abc';
// letters.match(/d/); //null

// console.log('Object'); //Object //Undefined

// function addTwoNums(a, b) {
//   try {
//     if (typeof a !== 'number') {
//       throw new TypeError('The first argument is not a number');
//     } else if (typeof b !== 'number') {
//       throw new TypeError('The second argument is not a number');
//     } else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log('The Error caught is', err);
//     console.log('the error is caught and saved in the variable "err"');
//   }
// }
// addTwoNums(5, '5');
// console.log(
//   'this line is reached, because the error is caught, even the second type is not a number'
// );

function letterFinder(word, match) {
  var condition1 = typeof word == 'string' && word.length >= 2;
  var condition2 = typeof match == 'string' && match.length == 1;
  if (condition1 && condition2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log('Found the', match, 'at', i);
      } else {
        console.log('---No match found at', i);
      }
    }
  } else {
    console.log('Please pass correct arguments to the function.');
  }
}

letterFinder([], []);
letterFinder('cat', 'c');

var str = 'Hello';
str.match('jello'); //null

//Try catch cannot be used to catch syntax errors, only runtime errors.
// try {
// console.log('hello)
// } catch(e) {
// console.log('caught')
// }
