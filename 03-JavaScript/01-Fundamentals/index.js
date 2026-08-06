console.log("Normal message");
console.error("Something went wrong");   // red, for errors
console.warn("Careful here");            // yellow, for warnings
console.table([{ name: "A", age: 1 }]);    // shows data as table
//console.timeEnd("loop");                 // measures execution time


function test() {
  //let b = 1
  if (true) {
    var a = 1
    let b = 2
    const c = 3
  }
  console.log(a) // function-scoped — ignores block
  // console.log(b) // ReferenceError: b is not defined
  //console.log(c) // ReferenceError: c is not defined
}
test()

let obj1 = { name: "John" };
let obj2 = obj1;

obj2.name = "Priya";

console.log(obj1);
console.log(obj2);


//Nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`)
  }
}

for (let a = 1; a <= 4; a++) {
  let row = "";
  for (let b = 1; b <= 4; b++) {
    row += "* "
  }
  console.log(row)
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break;   // breaks only the INNER loop
    console.log(`i=${i}, j=${j}`);
  }
}
// Output: i=1,j=1  i=2,j=1  i=3,j=1
// outer loop keeps running normally, only inner loop stops early each time


outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break outerLoop;   // breaks BOTH loops
    console.log(`i=${i}, j=${j}`);
  }
}
// Output: i=1, j=1   ← stops everything immediately

const obj = { name: "John", age: 25 };
for (let key in obj) {
  console.log(key, obj[key]);
}

const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}

const str = "Priya"
for (let character in str) {
  console.log(character, str[character])
}

//Function Declaration
function greet(name) {
  console.log(`Hello ${name}`)
}
greet("Priya")

console.log(greet1("John"));
function greet1(name) {
  return `Hello, ${name}`;
}

//Function Expression
try {
  console.log(greet2("John"));   // TypeError: greet2 is not a function (if var)
  // or ReferenceError (if let/const, still in TDZ)
} catch (err) {
  console.log("Error caught:", err.message);
}
var greet2 = function (name) {
  return `Hello, ${name}`;
};

//Named function
console.log(greet5("ABC"));
const greet5 = function sayHello(name) {
  return `Hello, ${name}`;
};
console.log(greet5("ABC"));
// "sayHello" is only accessible INSIDE the function itself (useful for recursion), not outside

let obj3 = {
  name: "Priya",
  regularFunction: function () {
    console.log(this.name)
  },

  arrowFunction: () => {
    console.log(obj3.name)
  }

}
obj3.regularFunction()  // Priya
obj3.arrowFunction()    // Priya (reads obj3.name directly, arrow function doesn't bind its own `this`)

//Default parameters
function greetDefault(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greetDefault());        // "Hello, Guest"
console.log(greetDefault("John"));  // "Hello, John"

//Rest parameters — collects remaining args into an array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4));   // 10

//Parameter destructuring
function greetPerson({ name, age }) {
  console.log(`${name} is ${age}`);
}
greetPerson({ name: "John", age: 25 });   // "John is 25"