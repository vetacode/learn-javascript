function fib(n) {
  // Step 1: Define the base cases here.
  // Base cases are the conditions that stop the recursion.
  // Hint: What is the value of Fibonacci(0) and Fibonacci(1)?

  if (n === 0) return 0;
  if (n === 1) return 1;

  // Step 2: Define the recursive case here.
  // Hint: Return the sum of Fibonacci(n-1) and Fibonacci(n-2).
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // Output: 5
console.log(fib(10)); // Output: 55

//FACTORIAL RECURSION
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(10));
// 3628800

//FLATTEN ARRAY
function flatten(arr) {
  const res = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      res.push(...flatten(el));
    } else {
      res.push(el);
    }
  }
  return res;
}

console.log(flatten([1, 2, [3, 4], 5]));
console.log(flatten([1, [2, [3, 6, 9], 4], 5]));

//RENDER NESTED COMMENTS

// comments: [{id, author, text, children: [...]}, ...]
function renderComments(comments) {
  if (!comments || comments.length === 0) return '';
  return `<ul>${comments
    .map(
      (c) =>
        `<li><strong>${escapeHtml(c.author)}}</strong>: ${excapeHtml(
          c.text
        )}${renderComments(c.children)}</li>`
    )
    .join('')}</ul>`;
}

console.log(renderComments());

//escapeHtml is small helper to avoid injection (omitted here)
