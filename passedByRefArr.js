//Primitives are passed by value

let a = 4;
console.log(a);
let b = a;
a = 5;
console.log(a);
console.log(b); // 4, karena b hanya merujuk ke nilai a, jika misal ini adalah object maka akan menampilkan reference a yang baru (5)

function changeValue(num) {
  num = 10;
}

changeValue(a);
console.log(a);

let num = [1, 2, 3, 5, 8, 9];

console.log(num);

function modifyArray(arr) {
  arr[0] = 10;
  arr[1] = 20;
  arr[2] = 30;
}

modifyArray(num);
console.log(num);
