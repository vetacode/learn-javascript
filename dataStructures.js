//Objects: is a key-value pair data structure in JavaScript. keys are strings or Symbols, and values can be any data type.

//Arrays: is a list-like data structure in JavaScript. It is an ordered collection of items, where each item can be accessed by its index.
let testScore = [75, 95, 90, 85, 80, 85];
let scoreSum = 0;
for (let i = 0; i < testScore.length; i++) {
  scoreSum += testScore[i];
}
let averageScore = scoreSum / testScore.length;
console.log(`The average test score is ${averageScore}`);

//Maps: consist of key-value pairs, where keys can be of any data type, and values can also be of any data type. Maps maintain the insertion order of keys.
let studentScores = new Map();

//Sets
studentScores.set('Alice', 85);
studentScores.set('Bob', 90);
studentScores.set('Charlie', 95);
studentScores.set('Alice', 88); // Updates Alice's score
console.log(studentScores.get('Alice')); // Output: 88
studentScores.delete('Bob'); // Removes Bob's score
console.log(studentScores.has('Charlie')); // Output: true
studentScores.forEach((score, student) => {
  console.log(`${student}: ${score}`);
});
