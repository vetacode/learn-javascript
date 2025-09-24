//Primitives are passed by value
let a = 4;
console.log(a);

function changeValue(num) {
  num = 10;
}

changeValue(a);
console.log(a);

let b = a;
a = 5;
console.log(a);
console.log(b); // 4, karena b hanya merujuk ke nilai a, jika misal ini adalah object maka akan menampilkan reference a yang baru (5)

function changeValue2(num) {
  num = 10;
}

changeValue2(a);
console.log(a);

//Arrays and lists are typically first class objects and are passed by reference
//The array was passed as a reference. Memory was saved (no full copy).But the caller’s data got changed → possible bug if you didn’t expect it.
let num = [7, 3, 4, 5, 8, 6];
console.log(num);

function modifyArray(arr) {
  arr[0] = 10;
  arr[1] = 20;
  arr[2] = 30;
}

modifyArray(num);
console.log(num);

//If we dont want to change the array refference then we can use the spread operator to copy before change

let num2 = [1, 2, 3, 5, 8, 9];
console.log(num2);

function safeCopy(arr) {
  let copy = [...arr];
  copy[0] = 10;
  copy[1] = 20;
  copy[2] = 30;
  return copy;
}

safeCopy(num2);
console.log(num2);

let newNum2 = safeCopy(num2);
console.log(newNum2);

//Passing a reference = saves memory, faster, but risky because changes affect the original.
//Passing a copy = safer, but uses more memory and time.
//The statement is warning that you must choose carefully depending on whether you want the function to modify the original data or not.
