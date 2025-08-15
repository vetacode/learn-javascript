const {
  PI,
  sqrt,
  max,
  min,
  abs,
  round,
  random,
  floor,
  ceil,
  pow,
  log,
  exp,
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  atan2,
  hypot,
  cbrt,
  sign,
  trunc,
  fround,
  imul,
  clz32,
  log10,
  log2,
  log1p,
  expm1,
  scale,
  randomInt,
  randomFloat,
  randomSign,
  randomRange,
  randomChoice,
  randomSample,
  randomUUID,
  randomBytes,
  randomFill,
  randomFillSync,
  randomGaussian,
  randomExponential,
  randomNormal,
} = Math;

console.log(PI);
console.log(Math.PI);

const item = ['Laptop', 1000];
const [name, price] = item; // Destructures the array into variables
console.log(name); // Output: Laptop
console.log(price); // Output: 1000

const review = {
  title: 'Great Service',
  author: 'Jane Smith',
};

// const author = review.author;
// const title = review.title;

const { title, author } = review;
