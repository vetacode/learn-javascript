//Convert JSON object to JS object
const car = '{"carColor": "red", "carBrand":"Toyota" }';

console.log(JSON.parse(car));

const carObj = JSON.parse(car);

carObj.carColor = 'green';

console.log(carObj);

//Convert JS object to JSON object
const data = {
  firstName: 'Fiqrie',
  lastName: 'Rahman',
  greeting: 'Hello',
};

const dataJSON = JSON.stringify(data);

console.log(dataJSON);

/*
Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

primitive values: strings, numbers, booleans, null

complex values: objects and arrays (no functions!)

Objects have double-quoted strings for all keys

Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code

String properties must be surrounded in double quotes. For example:
"fruits",
"vegetables"
Number properties are represented using the regular JavaScript number syntax; e.g
5,
10,
1.2

Boolean properties are represented using the regular JavaScript boolean syntax, that is:
true
and
false

Null as a property is the same as in regular JavaScript; it's just a
null
You can use object literals and array literals, as long as you follow the above rules.

What happens if you try to stringify a data type that is not accepted in JSON syntax?

For example, what if you try to stringify a function? The operation will silently fail.

If you try to stringify some other data types, such as a BigInt number, say 123n, you'd get the following error: Uncaught TypeError: Do not know how to serialize a BigInt.

Some examples of JSON strings
Finally, here is an example of a stringified JSON object, with a single key-value pair:

'{"color":"red"}' 

Here's a slightly more complex JSON object:

'{"color":"red", "nestedObject": { "color": "blue" } }' 

The above JSON object encodes two properties:

"color":"red"

"nestedObject": { "color": "blue" }

It's also possible to have a JSON string encoding just an array:

'["one", "two", "three"]'

The example above encodes an array with three string values. 

A JSON array of objects example:

'[{ "color": "blue" }, { "color": "red" }]'

The above example encodes an array containing two objects, where each object has a single key-value pair with string values.

What happens with unsupported data types?
If you try to stringify a data type not accepted by JSON, such as:

•        Functions: The operation will silently fail.

•        BigInt numbers: For example, attempting to stringify 123n will throw an error: Uncaught TypeError: Do not know how to serialize a BigInt.
*/
