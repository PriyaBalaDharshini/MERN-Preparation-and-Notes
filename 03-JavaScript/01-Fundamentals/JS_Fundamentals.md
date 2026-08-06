**JavaScript**
- High-level, single-threaded, dynamically-typed programming language
        - High-level — language is close to human English, far from machine code (0s/1s)
        - Single-threaded — only one line of JS code executes at any given moment, one call stack, no true parallel execution.
        - Dynamically-typed — a variable's type isn't fixed, it's decided by whatever value it holds, and can change anytime at runtime.
- Runs in the browser (via JS engines like V8, SpiderMonkey) and outside the browser via Node.js (server-side)

**Internal JS**
- JS code written directly inside a <script> tag within the HTML file itself

**External JS**
- JS code written in a separate .js file, linked into HTML using src

**Console**
- Built-in object for debugging/output


**Variables**
- scope:
        - var = function scoped
        - let/const = block scope
- Redeclare / Reassign
        - var = can redeclare and reassign
        - let = cann't re-declare can re-assign
        - const = cann't redeclare an dreassign
- const with objects — mutable content
        const obj = { name: "A" };
        obj.name = "B";      // ✅ fine, mutating content
        obj = { name: "C" };  // ❌ TypeError, reassigning variable itself
                - Objects/arrays → content can be mutated (changed), but the variable cannot be reassigned to a new object/array. Primitives (number/string/boolean) → no concept of mutation, they're direct values, so any change means reassignment, which const blocks
                - obj.property = value changes a property on the existing object — mutation, allowed. obj = {...} replaces the whole object with a new one — reassignment, always blocked by const
                        const obj = { name: "A" };

                        // ✅ MUTATE — same box, box-kulla content maathrom
                        obj.name = "B";           // { name: "B" }
                        obj.person = "C";         // { name: "B", person: "C" } — new key add pannalam!
                        delete obj.name;          // key remove pannalam
                        obj["age"] = 25;          // idhuvum mutate thaan

                        // ❌ REASSIGN
                        obj = { name: "B" };      // Error
                        obj = { person: "A" };    // Error


**Hoisting**
- console.log(a);   // undefined
        var a = 5;

- console.log(b);   // ReferenceError (Temporal Dead Zone)
        let b = 10;
- var → hoisted + auto-initialized to undefined
- let/const → hoisted but NOT initialized (stuck in TDZ until declared)

**Naming Conventions**
- camelCase — variables, functions
- PascalCase — classes
- UPPER_SNAKE_CASE — constants that never change

**Call Stack & Memory Heap**
- Call Stack = fast, organized memory that tracks function execution and stores primitive values directly (fixed size)
- Memory Heap = larger, unstructured memory for storing objects/arrays/functions (dynamic size)

- The Stack doesn't hold the actual object/array data — it only holds a reference/address pointing to where that data actually sits in the Heap
- Object / Array / Function → created directly in the Heap as soon as it's declared. The variable itself lives in the Call Stack, but only holds the address (reference) pointing to that Heap location
- Primitive (number / string / boolean / undefined / null / symbol / bigint) → never goes to the Heap at all — stored directly in the Call Stack as the actual value

**Primitive Data Types**
- Primitives are the basic, single, immutable values — stored directly in the Call Stack
- Number, string, boolean, undefined, null, symbol, bigint

**Reference Data Types**
- Reference types (also called non-primitive types) are values that are stored in the Heap, and variables hold only a reference/address pointing to them
- object, array, function, Regex, Date (new Date())

**typeof operator**
- typeof is used to check the data type of a value/variable. Returns a string naming the type
        - typeof 25;              // "number"
        - typeof "hello";          // "string"
        - typeof true;             // "boolean"
        - typeof undefined;        // "undefined"
        - typeof Symbol("id");      // "symbol"
        - typeof 123n;              // "bigint"

        - typeof { name: "A" };    // "object"
        - typeof [1, 2, 3];         // "object"   ← array is also "object"!
        - typeof function(){};      // "function"
        - typeof null;               // "object"   ← famous bug
- Since arrays are technically a special kind of object in JS, typeof treats them the same
        - To actually distinguish an array from a plain object
                - Array.isArray([1, 2, 3]);        // true
                - Array.isArray({ a: 1 });          // false

**Type Conversion**
- Converting a value from one data type to another
        - Explicit conversion - we covert a value using a function or method
        - Implicit conversion - JS automatically converts it behind the scenes, often during operations
- **Explicit conversion**
                To String
                String(123);          // "123"
                String(true);          // "true"
                String(null);          // "null"
                String(undefined);     // "undefined"

                (123).toString();      // "123" — alternative method

                To Number
                Number("123");          // 123
                Number("123abc");       // NaN — invalid, can't fully convert
                Number("");              // 0
                Number(true);             // 1
                Number(false);            // 0
                Number(null);             // 0
                Number(undefined);        // NaN

                parseInt("123px");        // 123 — parses until it hits invalid character
                parseFloat("12.5px");     // 12.5

                To Boolean
                Boolean(1);          // true
                Boolean(0);          // false
                Boolean("hello");    // true
                Boolean("");          // false
                Boolean(null);        // false
                Boolean(undefined);   // false
                Boolean(NaN);          // false
        
- **Implicit conversion**
- String Converion
- if either side of + is a string, JS converts the other side to a string too, then concatenates. Order matters — evaluated left to right

        "5" + 3;         // "53"  — number 3 gets converted to string, then concatenated
        "5" + 3 + 2;      // "532" — left to right: "5"+3 → "53", then "53"+2 → "532"
        5 + 3 + "2";       // "82" — left to right: 5+3 → 8 (both numbers), then 8+"2" → "82"
- Numeric coercion
- -, *, / always force numeric conversion since there's no such thing as "subtracting strings
        "5" - 2; // 3   — "-" always coerces to number, no string concatenation exists for "-"
        "5" * 2;       // 10
        "5" / 2;        // 2.5
        "10" - "4";     // 6
**== vs === [loose vs strict equality]**
- == (loose equality) — converts both values to the same type first, then compares
- === (strict equality) — compares both value AND type, no conversion happens
- If one value is a Number and the other is a String or Boolean, JavaScript usually tries to convert the other value into a Number before comparing with ==
- Number.isNaN(NaN);            // true — correct way to check


-"List the falsy values in JS." → false, 0, -0, 0n, "", null, undefined, NaN

**Loops**
- for loop: Used when you know how many times you want to loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4
- while loop: Used when you don't know exact number of iterations - keeps running as long as condition is true
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0 1 2 3 4
- do-while loop: Same as while, but condition is checked AFTER the loop body runs — guarantees the block runs at least once, even if condition is false from the start
let x = 10;
do {
  console.log("runs once");
  x++;
} while (x < 5);
// Output: "runs once"  ← still runs once, even though condition (10 < 5) is false
- break — exits the loop entirely
- continue — skips current iteration, moves to next
- for-in — iterates over object keys = Mainly used for objects. Using it on arrays is discouraged — order isn't strictly guaranteed for all cases, and it iterates indices, not just values.
- for-of — iterates over values (arrays, strings, Maps, Sets, etc.)


	        for-in	        for-of
Iterates over	Keys    	Values
Best used with	Objects	        Arrays, Strings, Maps, Sets (iterables)
Works on plain objects?	Yes	No (not iterable)

**Functions**
- Named Functions
        - defined using the function keyword
        - Fully hoisted — including the function body — so it can be called before it's defined in the code
- Function Expression/Named Function Expression
        - Function assigned to a variable — the function itself can be anonymous (no name) or named
        - NOT hoisted the same way — the variable (function) is hoisted (as undefined if var, or TDZ if let/const), but the function assignment only happens when that line actually executes
- Arrow Function
        - // Shorter — implicit return (no {} or return keyword needed for single expression)
        - const greet2 = (name) => `Hello, ${name}`;

        - // Single parameter — parentheses optional
        - const square = x => x * x;

        - // No parameters — parentheses required
        - const sayHi = () => console.log("Hi");

        - // Multiple parameters — parentheses required
        - const add = (a, b) => a + b;

        - // Returning an object literal — needs extra parentheses (or it's read as a code block)
        - const makeObj = (name) => ({ name: name });
**this binding**
        - Regular functions get this from the object that calls them. Arrow functions do not have their own this; they inherit this from the surrounding (outer) scope
        - arrow functions don't have their own arguments
        - Cannot be used as constructors
                function Person(name) { this.name = name; }
                const p = new Person("John");   // ✅ works

                const PersonArrow = (name) => { this.name = name; };
                const p2 = new PersonArrow("John");   // ❌ TypeError: PersonArrow is not a constructor
        - When to use: short callbacks, array methods (.map, .filter), anywhere you want this to stay from the outer scope
**Parameters**
- Default parameters = function greet(name = "Guest")
- Rest parameters — collects remaining args into an array = function sum(...numbers)
- Parameter destructuring = function greet({ name, age })

**Return**
- return immediately exits the function, sending the value back to wherever it was called
- Code after a return statement never executes (unreachable)
- No return statement → function returns undefined automatically
