/*
Introduction:    

Destructuring is a powerful feature in JavaScript that allows us to extract values from arrays and objects and assign them to variables in a concise and readable way. In this lab, you will practice destructuring values from arrays and objects and using them in string literals to create dynamic and meaningful output.  

Goal:  

The goal of this lab is to help  learners understand and apply JavaScript destructuring syntax for both arrays and objects. Learners will practice extracting specific values and utilizing them effectively in template literals.  

Objectives:    

By the end of this lab, learners will:

Understand and apply array destructuring to extract specific values.

Understand and apply object destructuring to access specific properties.

Use template literals to create dynamic strings using destructured values.

Debug and fix issues related to destructuring.

Problem Statement  

You will work with the following tasks:  

1.  An array of arrays, where each inner array contains a product's name and price. Your task will be to destructure the second product's name and price, and print the following:  

Second product: ${secondProductName}

Second product price: ${secondProductPrice}

2.  An object representing a review that contains properties like title, description, author, and timePosted. Your task will be to destructure the author, title, and timePosted from the object and use them to print a sentence:  

${author} posted a review titled, ${title} at ${timePosted}.  

Instructions:  

Part 1: Working with Arrays  

Step 1: Open the array_destructuring.js File  

Navigate to the Arrays_Objects folder under PROJECT folder and locate the array_destructuring.js file.

Open the file to view the provided code skeleton.

Step 2: Understand the concept of  Array Structure

Before working with the provided code, let's briefly explain what array destructuring means:

Array destructuring is a syntax that allows you to unpack values from an array into individual variables.

For example, consider an array with two elements:

const item = ["Laptop", 1000];
const [name, price] = item; // Destructures the array into variables
console.log(name); // Output: Laptop
console.log(price); // Output: 1000

Here, the name variable takes the first value, and the price variable takes the second value from the array.  

Step 3: Understand the Provided Array Structure

Initial Code (array_destructuring.js)    

The code includes an array of arrays, where each inner array represents a product's name and price.  

const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];

Step 4: Destructure the Second Product   

Extract the second product's name and price using array destructuring syntax.

Print the extracted values using the following format:

console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);
Step 5:  Execute the program by clicking the play button displayed below.    


step 6 : After running the code, the output will be displayed as shown below


solution

Note:  Before looking the  given solution, it is highly recommended to try writing the code yourself based on the hints that are provided and concepts you have learned.      

// Array of arrays containing product names and prices
const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];

// Destructure the second product
const [, [secondProductName, secondProductPrice]] = products;


Part 2: Working with Objects  

Step 1: Open the object_destructuring.js File  

Navigate to the Arrays_Objects folder under PROJECT folder and locate the object_destructuring.js file.

Open the file to view the provided code skeleton.

Step 2: Understand the Concept of Object Destructuring

Object destructuring is a syntax in JavaScript that allows you to extract specific properties from an object and assign them to variables in a concise way. This simplifies the process of accessing and using object properties.

For example, given the following review object:

const review = {
    title: "Great Service",
    author: "Jane Smith"
};

Instead of accessing each property individually like below:  

const author = review.author;
const title = review.title;

You can use destructuring to achieve the same result in a single line:  

const { title, author} = review; 
This extracts the author and title  properties from the review object and assigns them to variables with the same names.

In next step, you will apply this concept to extract values from the review object and use them to construct a meaningful string using template literals.

Step 3: Understand the Provided Object Structure

The  object_destructuring.js file includes a review object with the following structure:

const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

Step 4: Destructure Values from the Object.

Extract the author, title, and timePosted using object destructuring syntax.

Use these values to print a sentence in the following format

console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);

Step 5:  Execute the program by clicking the play button displayed below.    

Follow the same steps outlined in Step 5 of Part 1.

step 6 : After running the code, the output will be displayed as shown below


solution

Note:  Before looking the  given solution, it is highly recommended to try writing the code yourself based on the hints that are provided and concepts you have learned.    

// Object representing a review
const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

// Destructure properties from the review object
const { author, title, timePosted } = review;

Key Takeaways:  

Array destructuring simplifies the process of extracting specific elements.

Object destructuring makes it easy to extract specific properties.

Using template literals enhances readability and dynamic content generation.

With this lab, you will gain hands-on experience in applying destructuring to real-world scenarios.  

Final Step: Mark as Completed

Click the Mark as Completed button present below to mark the lab as Completed.
*/

//ARRAYS
const products = [
  ['Laptop', 1000],
  ['Phone', 500],
  ['Tablet', 700],
];
// Destructure the second product's name and price from the array

const [, [secondProductName, secondProductPrice]] = products;

console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);

//OBJECTS
const review = {
  title: 'Amazing Product',
  description: 'This product exceeded my expectations.',
  author: 'John Doe',
  timePosted: '2024-11-24',
};

// Destructure the author, title, and timePosted properties from the review object

const { title, description, author, timePosted } = review;

console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);
