let n = 10;
let arr = [12, 21, 33, 4, 51, 6, 37, 8, 19, 10];

for (i = 0; i < n - 1; i++) {
  let minIndex = i;
  for (j = i + 1; j < n; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  // return minIndex;
}

console.log(minIndex);

swap(arr[i], arr[minIndex]);

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}
console.log(arr);
// O(n^2)
