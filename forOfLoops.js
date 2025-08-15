/*
Object.keys(); // Returns an array of a given object's own enumerable property names, in the same order as that provided by a for...in loop.
Object.values(); // Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
Object.entries(); // Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
*/

let myShirt = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn',
};

for (const key of Object.keys(myShirt)) {
  console.log(`${key}: ${myShirt[key]}`);
}

/*
var clothingItem = {
  price: 50,
  color: 'beige',
  material: 'cotton',
  season: 'autumn',
};

// if (clothingItem && typeof clothingItem === 'object') {
//   for (const key of Object.keys(clothingItem)) {
//     console.log(key, ':', clothingItem[key]);
//   }
// } else {
//   console.error('clothingItem is not a valid object');
// }

for (const key of Object.keys(clothingItem)) {
  console.log(key, ':', clothingItem[key]);
}

*/
