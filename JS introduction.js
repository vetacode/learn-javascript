/*
var age = '65';
if (age >= 65) {
  console.log('You get your income from your pension.');
} else if (age < 65 && age >= 18) {
  console.log('Each month you get a salary.');
} else if (age < 18) {
  console.log('You get an allowance.');
} else {
  console.log('The value of the age variable is not numerical.');
}

var day = 'Sunday';
switch (day) {
  case 'Monday':
    console.log("It's Monday, back to work!");
    break;
  case 'Tuesday':
    console.log("It's Tuesday, keep going!");
    break;
  case 'Wednesday':
    console.log("It's Wednesday, halfway through the week!");
    break;
  case 'Thursday':
    console.log("It's Thursday, almost there!");
    break;
  case 'Friday':
    console.log("It's Friday, the weekend is near!");
    break;
  case 'Saturday':
    console.log("It's Saturday, enjoy your day off!");
    break;
  case 'Sunday':
    console.log("It's Sunday, relax and recharge!");
    break;
  default:
    console.log('There is no such day.');
}

for (var i = 100; i >= 90; i--) {
  console.log(i);
}
console.log('The loop has ended in 90.');

for (var i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('Counting completed!');

for (var i = 5; i > 0; i--) {
  console.log(i);
}
console.log('Countdown finished!');

var i = 1;
while (i <= 5) {
  console.log(i);
  // i = i + 1;
  i++;
}
console.log('Counting completed!');

var i = 5;
while (i > 0) {
  console.log(i);
  i--;
}
console.log('Countdown finished!');

var i = 2018;
while (i <= 2022) {
  console.log(i);
  i++;
}
console.log('The loop has ended in 2022.');

for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + ' divided by ' + j + ' equals ' + i / j);
  }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
  var styles =
    'font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple';
  console.log('%c' + cubes[i], styles);
}
*/

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log('Gold medal.');
  } else if (i == 2) {
    console.log('Silver medal.');
  } else if (i == 3) {
    console.log('Bronze medal.');
  } else {
    console.log(i);
  }
}

// for (var i = 1; i <= 10; i++) {
//   switch (i) {
//     case 1:
//       console.log('Gold medal');
//   }
//   switch (i) {
//     case 2:
//       console.log('Silver medal');
//   }
//   switch (i) {
//     case 3:
//       console.log('Bronze medal');
//   }
//   if (i > 3) {
//     console.log(i);
//   }
// }

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log('Gold medal');
      break;
    case 2:
      console.log('Silver medal');
      break;
    case 3:
      console.log('Bronze medal');
      break;
    default:
      console.log(i);
  }
}
