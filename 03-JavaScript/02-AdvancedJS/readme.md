**Global Scope**
- A variable declared outside any function or block — accessible from anywhere in the entire file/program, including inside any function or block.
- Global scope in the browser — attaches to window
    - var at global scope → becomes a property of the global object (window in browser, global in Node)
    - let / const at global scope → still globally accessible in your code, but does NOT attach to window/global — it lives in a separate mechanism called the "script scope"

**Function Scope**
- A variable declared inside a function is only accessible within that function — not accessible from outside it
- inner functions can access variables from outer functions (this is called the **scope chain**)
- each function call has its own isolated scope [same variable name can be used in multiple functions]

**Block Scope**
- A block is any code wrapped in {}
- Variables declared with let/const inside a block are only accessible within that block — not outside it.
- Every block type creates a new scope with let/const

**Variable shadowing**
let x = "outer";
{
  let x = "inner";
  console.log(x);   // "inner" — inner block's x takes priority within this block
}
console.log(x);   // "outer" — outer x unaffected, untouched
- This is called variable shadowing — a variable in an inner block with the same name as an outer variable temporarily "shadows" (hides) the outer one, only within that inner block. Once the block ends, the outer variable is back to normal, completely unaffected.
- var doesn't shadow the same way — causes conflicts instead
var x = "outer";
{
  var x = "inner";   // SAME variable, not a new one — overwrites outer x
  console.log(x);     // "inner"
}
console.log(x);   // "inner" — outer x got overwritten! no shadowing happened

**Hosting**
- During the Creation Phase of an Execution Context (before any code actually runs line-by-line), the JS engine scans the code and moves variable/function declarations to the top of their scope into memory — this is called hoisting.
- only the declaration is hoisted, not the initialization/assignment.
- var declarations are hoisted to the top of their function (or global) scope, and the engine automatically assigns them the placeholder value undefined until the real assignment line runs.
- let and const are hoisted but unlike var, they are not auto-initialized. They exist in a special state called the Temporal Dead Zone (TDZ) from the start of their scope until the line where they're actually declared.
- Function declarations are hoisted completely — not just the name, but the entire function body too. That's why you can call them before their definition appears in the code.     
- Function Expression hoisting: Function Expresstion declared with var throw undefined error. let/const will throu ReferenceError
- Classes are hoisted too, but just like let/const, they stay in the Temporal Dead Zone until their declaration line

**Closures**
- Close over to closues
- A closure is a function that retains access to variables from its outer/enclosing scope, even after the outer function has finished executing. This happens because JavaScript keeps that outer scope alive in memory as long as some inner function still references it
- Every single function in JavaScript automatically forms a closure over its surrounding scope

let globalVar = "I'm global";

function anyFunction() {
  console.log(globalVar);   // this IS a closure — accessing outer scope variable
}

**Lexical Scope**
- a function's access to outer variables is decided by where it is physically written in the code, not by where or how it is later called; this is fixed permanently at write-time
let a = "global";

function outer() {
  let b = "outer";

  function inner() {
    let c = "inner";
    console.log(a, b, c);   // "global" "outer" "inner"
  }

  inner();
}
outer();

- inner() can access a and b because of where it's physically written — it's nested inside outer(), which is nested inside the global scope. This nesting at write-time decides what it can access, permanently — no matter when or how inner() actually gets called later.

let x = "global x";

function first() {
  let x = "first x";
  second();   // calling second() from inside first()
}

function second() {
  console.log(x);   // "global x" — NOT "first x"!
}

first();
- Why not "first x"? Even though second() is called from inside first(), that doesn't matter for lexical scope. What matters is where second was physically written in the code — and it was written in the global scope, right next to first, not nested inside it. So second only has lexical access to global variables, completely unaware that it happened to be called from within first().

**Array**
  **Basci Mutation Methods** - it mutates original array
    - push()      // add to END
    - pop()       // remove from END
    - shift()     // remove from START - Slower than pop() for large arrays, since every remaining element has to be re-indexed
    - unshift()   // add to START
    - slice()     // copy a portion (does NOT modify original) - **it does not muatate the array**
      - o/p - slice(start-index-value, end-index-1-value)
      - end index is exclusive (not included in result)
      - Both arguments are optional:
        - arr.slice(2);        // [3, 4, 5] — from index 2 to end
        - arr.slice();          // [1, 2, 3, 4, 5] — full shallow copy independent copy, doesn't affect original
        - arr.slice(-2);        // [4, 5] — negative index counts from the end
    - splice()    // add/remove at any position (DOES modify original)
       - o/p - return removed elements of array
  **Iteartion Methods** - non-mutating, returns new array/value 
    - map()       // transform each element, returns NEW array
      - Callback receives 3 arguments
        arr.map((element, index, array) => {
        console.log(element, index, array);
        });
        - Same length as original
    - filter()    // keep elements matching condition, returns NEW array
      - keep elements matching a condition
      - DIFFERENT length possible, keeps only matching elements
      - Can return an empty array if nothing matches — never returns undefined
    - reduce()    // combine all elements into a single value
      -always pass an initial value explicitly — without it, reduce on an empty array throws an error
    - find()      // return FIRST matching element
      - const found = arr.find(num => num > 3) = returns the VALUE, not an array
      - Returns undefined if nothing matches (never throws an error)
      - Stops searching as soon as it finds the first match
    - every()     // check if ALL elements match a condition
      - console.log(arr.every(num => num % 2 === 0));
      - Returns a single boolean
      - Stops checking as soon as one element fails the condition
      - [].every(...) on an empty array → always true - since there's nothing to check
    - some()      // check if AT LEAST ONE element matches
     - Returns a single boolean
     - Stops checking as soon as one element passes (short-circuits)
     - [].some(...) on empty array → always false
    - sort()      // sort elements (modifies original array)  - **Mutates the original array**
      - make a copy first if you need the original preserved
      - const nums = [10, 2, 33, 4];
        nums.sort();
        console.log(nums);   // [10, 2, 33, 4] → sorted as STRINGS → [10, 2, 33, 4]
      - const nums = [10, 1, 21, 2];
        nums.sort((a, b) => a - b);   // ascending
        console.log(nums);   // [1, 2, 10, 21]

        nums.sort((a, b) => b - a);   // descending
        console.log(nums);   // [21, 10, 2, 1]


**Object**
  **Object Creation** - 5 Ways
    - Object Literal (most common, use this 90% of the time)
    - new Object() (rarely used in real code)
    - Constructor Function (older pattern, pre-ES6)
      - greet() recreated for EVERY instance (wastes memory)
    - class (ES6+, modern preferred way for creating multiple similar objects)
      - greet() defined ONCE on the prototype, shared by ALL instances
    - Object.create() — creates object with a specific prototype
    **Object Methods**
    e.g. const user = { name: "John", age: 25, city: "Chennai" };
    - Object.values() — get all values as an array
      - console.log(Object.values(user));   // ["John", 25, "Chennai"]
    - Object.entries() — get key-value pairs as an array of arrays
      - console.log(Object.entries(user)); // [["name", "John"], ["age", 25], ["city", "Chennai"]]
    - forEach looping method
    - formEntires methods
    - Object.assign() — merge objects / shallow copy
    - Object.freeze() — make object immutable (top-level only)
    - hasOwnProperty() — check if key exists directly on the object (not inherited)
**Destructuring**
  - Pulls values out of objects/arrays into individual variables
  - Basic Object Destructuring: variable names must match the property names exactly — order doesn't matter (unlike array destructuring)
  - Renaming while destructuring - cannot be done will get ReferenceError
  - Adding Default values
  - Destructuring in function parameters

**Array Destructuring**
- Key difference from object destructuring: array destructuring is position-based, not name-based — order absolutely matters here

**Spread Operator**
- Expands/unpacks elements of an array or object into individual items.
- Spread with **Arrays**
- Copying an array = const arr2 = [...arr1];
- Merging arrays = const merged = [...a, ...b];
- Adding elements while copying = const newArr = [1, ...arr, 5];
- Finding max/min using spread = console.log(Math.max(...numbers))
- Converting a string to an array of characters = console.log([...str]);   // ["H", "i"]
- Spread with **Objects**
- Copying an object = const copy = { ...user }
- Merging objects
- const settings = { ...defaults, ...userPrefs };

**Optional Chaining**
- Safely access deeply nested properties without manually checking every level exists
 - console.log(user.contact?.phone);
 - console.log(user.contact?.address?.city);   // undefined, no error even though multiple levels are missing
 - Optional chaining with function calls = user2.greet?.();
 - optional callback props
  function Component({ onSave }) {
  onSave?.();   // calls onSave only if it was actually passed in, no crash if it wasn't
}
- Combining with Nullish Coalescing
  - const city = user.contact?.address?.city ?? "Unknown"; - // "Unknown" — provides a fallback if the whole chain returns undefined/null
   