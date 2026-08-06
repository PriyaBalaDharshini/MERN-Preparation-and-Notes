// 1. Object Literal
const user = {
    name: "Priya",
    age: 30,
    address: {
        city: "Chennai",
        state: "Tamilnadu"
    },
    greet() {
        console.log(`Hello, my name is ${this.name} and am from ${this.address.city}, ${this.address.state}`);
    }
}
user.greet();

//Used for one-off objects, config objects, data structures
// one-off object: Need only one object e.g. const user = { ... }
// Config object: Stores settings/options const options = {darkMode: true,language: "English",fontSize: 18};
// Data structure: Stores related data in an organized way = employee details, product info, etc. const product = {id: 101,name: "Laptop",price: 1200,stock: 50};

// 2. new Object()
const user2 = new Object();
user2.name = "Priya"
user2.age = 30
console.log(user2);

//3. Constructor Function (older pattern, pre-ES6)
function User(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const user3 = new User("Priya", 30);
const user4 = new User("Ravi", 25);
user3.greet();
user4.greet();

//4. class (ES6+, modern preferred way)

class Details {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.place}.`);
    }
}

const user5 = new Details("Priya", 30, "Chennai");
const user6 = new Details("Ravi", 25, "Bangalore");
user5.greet();
user6.greet();


//5.  Object.create() — creates object with a specific prototype
const personProto = {
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

const user7 = Object.create(personProto);
user7.name = "John";
user7.greet();   // "Hi, I'm John" — inherited from personProto


const userX = { name: "John", age: 25, city: "Chennai" }
Object.entries(userX).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

const entries = [["name", "John"], ["age", 25]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: 'John', age: 25 }

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);   // { a: 1, b: 3, c: 4 } — obj2's 'b' overrides obj1's 'b'
//First argument is the target — merged result gets written into it


const config = Object.freeze({ apiUrl: "https://api.com", retries: 3 });

config.apiUrl = "hacked";      // silently fails (throws error in strict mode)
config.newProp = "test";        // also fails — can't add new properties either
delete config.retries;           // fails — can't delete either

console.log(config);   // { apiUrl: "https://api.com", retries: 3 } — completely unchanged

console.log(Object.isFrozen(config));   // true

//Basic Object Destructuring


const userDetails = {
    name: "Priya",
    age: 30
};
// Without destructuring (old way)
const name = userDetails.name;
const age = userDetails.age;
// With destructuring (same result, cleaner)
const { name, age } = userDetails;

//Renaming
const { name: userName, age: userAge } = userDetails;
console.log(userName, userAge);   // "John" 25
console.log(name);   // ❌ ReferenceError — 'name' doesn't exist as a variable anymore, only 'userName'

//Default Values:
const userY = { name: "John" };
const { name, country = "India" } = userY;
console.log(name);   // "John"
console.log(country);   // "India" — since userY.country doesn't exist, default kicks in

//Destructuring in function parameters
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
printUser(user);   // "John is 25 years old"

//With default values in function parameters:
function printUser ({name, age, country="India"}){
     console.log(`${name}, ${age}, ${country}`);
}
printUser({ name: "John", age: 25 });


const arr = [10, 20, 30];
const [first, second, third] = arr;
console.log(first, second, third);   

//Skipping elements:
const [a, , c] = [1, 2, 3];   // skip the middle one with an empty comma
console.log(a, c);   // 1 3

//Default Values
const [x = 10, y = 20] = [5];
console.log(x, y);   // 5 20 — y uses default since arr only had one element

//Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);   // 2 1 — swapped without a temp variable!

//Rest pattern in destructuring
const [first2, ...rest] = [1, 2, 3, 4];
console.log(first2);   // 1
console.log(rest);      // [2, 3, 4]

const { name: n, ...otherDetails } = user;
console.log(n);              // "John"
console.log(otherDetails);   // { age: 25, city: "Chennai" }