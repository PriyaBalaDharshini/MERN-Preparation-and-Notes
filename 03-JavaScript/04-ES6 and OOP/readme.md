**ES6 Features**

- Template literals use backticks ( ) instead of quotes. They let you easily add variables or expressions inside a string and write strings on multiple lines.
- Spread (...) — expands a collection into individual elements
- Rest (...) — collects individual elements into a single array/object
- Destructuring — pulls values out of objects/arrays into variables
- Default Parameters — fallback value used when an argument isn't passed

**Modules**

- A module is a separate JavaScript file. It can share variables, functions, or classes using export, and other files can use them with import.
- Two Module Systems in JS
  - CommonJS (require/module.exports) — older, used by default in Node.js
  - ES Modules (import/export) — modern, ES6+ standard, works in browsers and modern Node.js
- Named Exports — export multiple things from one file
  - export const add = (a, b) => a + b;
  - const add = (a, b) => a + b;
    export { add};
  - Importing named exports = import { add } from './math.js';
  - import { add as sum } from './math.js';
- Default Export — one main thing per file
    - export default function greet(name) 

**OOP**
- Object-Oriented Programming — organizing code around objects that bundle together data (properties) and behavior (methods), instead of writing everything as separate loose functions and variables.
- 4 core OOP principles
    - Encapsulation — bundling data + methods together, hiding internal details
    - Inheritance — one class can reuse/extend another class's properties/methods
    - Polymorphism — different classes can implement the same method differently
    - Abstraction — hiding complex implementation, exposing only what's necessary

- **Debounce** — waits until the user STOPS triggering the event for X ms, then runs once
- **Throttle** — Even if the user keeps doing something continuously, run the function only once every fixed amount of time
