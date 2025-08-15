// Part 1: Separate Array Elements
const topSixRestaurants = [
  'Chick-fil-A',
  'In-N-Out',
  'Chipotle',
  "McDonald's",
  'Taco Bell',
  'KFC',
];

// let [first, second, third] = topSixRestaurants;
// let [, , , ...remaining] = topSixRestaurants;

let [first, second, third, ...remaining] = topSixRestaurants;

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);

const meal = ['soup', 'steak', 'ice cream'];
let [starter] = meal;
console.log(starter);

// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs('a', 'b', 'c');

// Part 3: Merge Arrays
const favoriteBaseballTeams = [
  'Yankees',
  'Mets',
  'Dodgers',
  'Giants',
  'Red Sox',
  'Cubs',
];
const favoriteFootballTeams = [
  'Patriots',
  'Giants',
  'Jets',
  'Eagles',
  'Steelers',
  'Cowboys',
];

const favoriteTeams = [...favoriteBaseballTeams, ...favoriteFootballTeams];
console.log('Favorite teams:', favoriteTeams);
