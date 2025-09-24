//Objects are passed by reference

let obj = { name: 'John' };
console.log(obj); // { name: 'John' }

let obj2 = obj; // obj2 is a reference to obj
obj.name = 'Jane';

console.log(obj); // { name: 'Jane' }
console.log(obj2); // { name: 'Jane' } jika bukan object maka akan menampilkan ref awal: { name: 'John' }
