<button id="btn">Click me</button>

const btn = document.getElementById('btn');
btn.addEventListener("click", function () {
    console.log("Button CLicked");
})

//Click event
document.getElementById("btn").addEventListener("click", () => {
    console.log("Clicked!");
});

//Submit event
<form id="myForm">
    <input type="text" id="username" />
    <button type="submit">Submit</button>
</form>

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();   // stops the default page reload/navigation
    const username = document.getElementById("username").value;
    console.log("Submitted:", username);
});

//keyup and keydown events
<input type="text" id="inputBox" />

const input = document.getElementById("inputBox");

input.addEventListener("keydown", (e) => {
    console.log("Key down:", e.key);
});

input.addEventListener("keyup", (e) => {
    console.log("Key up:", e.key);
});

//change event
<>
    <select id="fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
    </select>

    <input type="checkbox" id="agree" />
</>

document.getElementById("fruits").addEventListener("change", (e) => {
    console.log("Selected fruit:", e.target.value);
});

document.getElementById("agree").addEventListener("change", (e) => {
    console.log("Checked:", e.target.checked);
});

//Input vs changes
const textInput = document.getElementById("textBox");

textInput.addEventListener("input", (e) => {
    console.log("input fires on EVERY keystroke:", e.target.value);
});

textInput.addEventListener("change", (e) => {
    console.log("change fires only after LOSING FOCUS:", e.target.value);
});

//e.target vs e.currentTarget
<div id="parent">
    <button id="child">Click</button>
</div>

document.getElementById("parent").addEventListener("click", function (e) {
    console.log(e.target);          // <button> — the actual element clicked
    console.log(e.currentTarget);   // <div> — the element the listener is ON
});

// Set an item
localStorage.setItem("username", "John");

// Get an item
const username = localStorage.getItem("username");
console.log(username);   // "John"

// Remove a specific item
localStorage.removeItem("username");

// Clear EVERYTHING in localStorage
localStorage.clear();

sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token"));   // "abc123"
sessionStorage.removeItem("token");
sessionStorage.clear();


function greet(name, callbackFunction) {
    console.log("Hello " + name);
    callbackFunction();
}

greet("Priya", function () {
    console.log("This is a callback function");
})

const promise = new Promise((resolve, reject) => {
    const status = true
    if (status) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
})



const promise = new Promise((resolve, reject) => {
  console.log("State right now: pending");
  
  setTimeout(() => {
    resolve("Done!");
    console.log("State right now: fulfilled");
  }, 2000);
});

console.log(promise);   // Promise { <pending> } — logged immediately, before setTimeout finishes

setTimeout(() => {
  console.log(promise);   // Promise { "Done!" } — logged after 2 seconds, now fulfilled
}, 3000);


const promise = new Promise((resolve, reject) => {
  // INSIDE — neenga DEFINE + CALL pandrom
  const success = false;
  
  if (success) {
    resolve("Done!");     // ← neenga manually CALL pandrom
  } else {
    reject("Failed!");     // ← neenga manually CALL pandrom
  }
});

// OUTSIDE — idhu AUTOMATIC ah trigger aagum, neenga call pannradhu illa
promise
  .then((result) => console.log(result))    // resolve() call aana odane, IDHU automatic ah run aagum
  .catch((error) => console.log(error));     // reject() call aana odane, IDHU automatic ah run aagum


// Promise chain (what we've learned so far)
function getUser() {
  fetch("/api/user")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

// async/await (same thing, cleaner syntax)
async function getUser() {
  try {
    const response = await fetch("/api/user");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//Sequential vs Parallel execution

async function getData(){
const user = await getUser();
const order = await getOrder();
console.log(user, order);
}

async function getData1(){
    const [user, order]= await Promise.all([getUser(), getOrder()]);
    console.log(user, order);
}