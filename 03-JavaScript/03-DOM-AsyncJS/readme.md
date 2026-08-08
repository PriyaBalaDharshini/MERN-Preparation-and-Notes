**DOM**

- Document Object Model is a tree-like representation of your HTML page that the browser creates — it lets JavaScript read, modify, add, or remove elements on the page dynamically
- JS will not directly manipulate the HTML. It manipulated the DOM, then the browser re-renders the page

**getElementById**

- document.getElementById("id-value");
  - returns one element
  - Selects a single element by its id attribute
  - ID's should be unique
  - Returns the 1st match if duplicated
  - return null if no element exists

**getElementsByClassName**

- document.getElementsByClassName("class-name");
  - Returns an HTMLCollection
  - Selects all elements with the specified class
  - Multiple elements can have the same class
  - Returns an empty HTMLCollection if no elements exist

**getElementsByTagName**

- document.getElementsByTagName("tag-name");
  - Returns an HTMLCollection
  - Selects all elements with the specified HTML tag
  - Returns an empty HTMLCollection if no elements exist

**querySelector**

- document.querySelector("CSS-selector");
  - Returns one element
  - Selects the first element matching the CSS selector
  - Supports ID (`#id`), class (`.class`), tag (`div`), attribute selectors, etc.
  - Returns `null` if no matching element exists

**querySelectorAll**

- document.querySelectorAll("CSS-selector");
  - Returns a NodeList
  - Selects all elements matching the CSS selector
  - Supports ID (`#id`), class (`.class`), tag (`div`), attribute selectors, etc.
  - Returns an empty NodeList if no matching elements exist

**Common Element Properties**

- const el = document.querySelector("#title");
  - el.textContent; // get/set plain text content
  - el.innerHTML; // get/set HTML content (can inject tags)
  - el.style.color = "red"; // change inline CSS
  - el.classList.add("active"); // add a class
  - el.classList.remove("active"); // remove a class
  - el.classList.toggle("active"); // toggle a class on/off
  - el.setAttribute("data-id", "5"); // set an attribute
  - el.getAttribute("data-id"); // read an attribute

**Events**

- An event is an action that happens in the browser — a user clicking, typing, submitting a form, etc. JavaScript can listen for these events and run code in response.
- click , submit, keyup, keydown, change, input
- input — fires immediately, on every single change (every keystroke, paste, etc.) — best for real-time validation/live character counters
- change — fires only when the value is committed and the element loses focus (for text inputs) — best for "final value" scenarios
- preventDefault() stops that default browser behavior, letting you handle the submission entirely with JS
- e.target tells you what was actually clicked
- e.currentTarget tells you which element's listener is currently running

**Web Storage**

- Storage provided by the browser. On user's machine data will be save as key-value pair.
- Two types: localStorage and sessionStorage — same API, different lifespan.
  **localStorage**
  - Data persists forever (until explicitly cleared) — survives page reloads, browser restarts, even closing and reopening the browser.
  - setIteam, getIteam, removeIteam, clear = functionalities
  - localStorage only stores strings.
  - Even if you store a number/boolean, it gets automatically converted to a string. You need to manually convert it back when reading
    **sessionStorage**
  - Same exact API as localStorage, but data only persists for the duration of the browser tab/session — cleared automatically when the tab is closed.
  - setIteam, getIteam, removeIteam, clear = functionalities
    **Storing Objects/Arrays**
  - Since Web Storage only stores strings, you can't directly store an object or array — you need to convert it using JSON.stringify() and JSON.parse()
  - JSON.stringify() — converts JS object/array → JSON string
  - JSON.parse() - converts JSON string → back to JS object/array

**cookie**

- A small piece of data (max ~4KB)
- mainly used to remember information about the user across requests
- Once set, the browser automatically sends the cookie back to the server with every request to that website — commonly used for login sessions
1. LOGIN
   Browser --[username/password]--> Server
   Browser <--[Set-Cookie: session=abc123]--- Server
   (Browser silently stores this cookie)

2. EVERY REQUEST AFTER THAT (automatic, no code needed)
   Browser --[Cookie: session=abc123]--> Server
   Server: "I recognize this session, here's your dashboard"

3. LOGOUT / EXPIRY
   Server sends Set-Cookie with a PAST expiry date → browser deletes it
   OR cookie's own expiry time passes → browser deletes it automatically


**Callbacks**
- A callback is a function passed as an argument to another function
- Higher-Order Function is a function that Accepts a function as an argument

**Promise**
- A Promise is a JavaScript object that represents the eventual result of an asynchronous operation
- A Promise is always in exactly one of 3 states at any given time
  // 1. PENDING — initial state, operation still in progress, not finished yet
  const p1 = new Promise((resolve, reject) => {
  // nothing called yet — stays PENDING until resolve/reject is called
  });
  console.log(p1);   // Promise { <pending> }

  // 2. FULFILLED (a.k.a "resolved") — operation completed SUCCESSFULLY
  const p2 = new Promise((resolve) => resolve("Success!"));
  console.log(p2);   // Promise { "Success!" }

  // 3. REJECTED — operation FAILED
  const p3 = new Promise((resolve, reject) => reject("Failed!"));
  console.log(p3);   // Promise { <rejected> "Failed!" }
- a promise can only settle ONCE, permanently
- resolve / reject — called manually, inside the Promise's executor function — used to decide the outcome (success or failure) of the async operation
- .then / .catch — used outside the Promise, when consuming it — these run automatically, triggered by whichever one (resolve or reject) was called inside

**async await**
- async/await is an easier way to work with Promises. It makes asynchronous code look like normal, step-by-step code, so it is easier to read than using .then() chains.
- async/await doesn't replace Promises — it's built entirely on top of them. Under the hood, it's still Promises doing the work; async/await just gives you a cleaner way to write and read that code.

**Fetch API**
- fetch() is the modern, built-in browser API for making HTTP requests
- JS Object/Array  ──JSON.stringify()──>  JSON String
- JSON String      ──JSON.parse() / response.json()──>  JS Object/Array
