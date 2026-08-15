**React**

- A JavaScript library for building user interfaces, especially single-page applications — built around breaking UI into reusable components, and automatically re-rendering the UI when data (state) changes.

**Single Page Application**

- A web app that loads one HTML page initially, and JavaScript dynamically updates the content afterward — without reloading the full page for every navigation.
- How it works:
  1. Browser loads index.html ONCE (+ JS bundle)
  2. User clicks a link/button
  3. JS swaps the content shown on screen (no request for a new HTML page)
  4. URL may change, but no actual page reload happens
- Advantages:
  1. Fast navigation after initial load — no full page reload
  2. Smooth experience — no white flash/flicker between pages
  3. Reduces server load — server only sends data (via APIs), not full HTML pages repeatedly
- Disadvantages:
  1. Slower initial load — entire JS bundle must downloaded
  2. Needs extra tooling (router library) to handle browser back/forward buttons and URL changes properly
  3. Fully depends on JavaScript — if JS fails/is disabled, the page shows blank

**Multi Page Application**

- A web app where each page is a separate HTML file — every navigation triggers a full request to the server, which sends back a brand new HTML page.
- How it works:
  1. User clicks a link (e.g., "About")
  2. Browser sends a request to the server for about.html
  3. Server sends back a COMPLETE new HTML page
  4. Browser throws away the current page, loads the new one from scratch
- Advantages:
  1. Faster initial load — only loads what's needed for that specific page
  2. Simpler mental model — each page is independent
- Disadvantages:
  1. Full page reload on every navigation
  2. Higher server load
  3. State doesn't persist across pages — e.g., anything playing/running on one page stops when you navigate away, since everything reloads

**Virtual DOM**

- VDOM is a lightweight copy of the real DOM that React keeps in memory.
  1. React updates the Virtual DOM first.
  2. React compares the new VDOM with the old VDOM.
  3. It finds what actually changed.
  4. React updates only that part in the real DOM.
- This process of comparing old vs new Virtual DOM trees is called **diffing**, and the algorithm that does it efficiently is called **reconciliation**.
- Why is direct DOM manipulation slow? → every change can trigger layout recalculation, reflow, and repaint

**JSX**

- JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code directly inside your JS files
- it gets compiled/transpiled (automatically converted into JavaScript by Babel) into regular JS function calls before the browser ever sees it.
  - const element = <h1 className="title">Hello, World</h1>;
  - const element = React.createElement("h1", { className: "title" }, "Hello, World");
  - React.createElement(type, props, children) = **Syntax**
- JSX Rules
  1. Must return a SINGLE root element. Why: JSX compiles to a function call — React.createElement(...) can only return one thing
  2. Use className instead of class
  3. All tags must be closed (including self-closing ones)
  4. camelCase for attributes and event handlers
  5. Components must start with a Capital letter

**Expressions in JSX**

- The core rule: {} only accepts EXPRESSIONS, not statements
  // Expression = produces a VALUE
  {2 + 2} // ✅ 4
  {name} // ✅ variable value
  {isActive ? "Yes" : "No"} // ✅ ternary returns a value
  {items.map(i => <li>{i}</li>)} // ✅ map returns an array (valid JSX child)
  {getUserName()} // ✅ function call returns a value

// Statement = performs an ACTION, doesn't produce a usable value
{if (x) { ... }} // ❌ SyntaxError
{for (let i=0; i<5; i++) {}} // ❌ SyntaxError
{let x = 5} // ❌ SyntaxError — declarations aren't expressions

**Fragment**

- Fragment — a wrapper that doesn't render any actual DOM element
- shorthand syntax <></>. if we want to pass any kep prop need to be decaled like <Fragment>
  </Fragment>

- **Embedding JavaScript** means putting JavaScript expressions inside JSX using {}.

**Component**

- A component is a reusable piece of a React UI.
- essentially a JavaScript function that returns JSX
- Instead of building one giant page of markup, you break the UI into smaller, independent, reusable pieces.
- **Functional Components** - standard way to write React components - a plain JS function that returns JSX

**Props**

- Props (short for "properties") are how you pass data from a parent component into a child component
- Props are just the parameter(s) a component receives
- React automatically collects all the attributes you write on a component tag (name="John") into a single props object, and passes that object as the function's argument.
- Props are read only
- React follows a strict rule called _one-way data flow_
  - Data flows only from Parent → Child through props.
  - Child components cannot directly modify props.
  - If the Child needs to change a value, the Parent passes a function as a prop.
  - The Child calls that function, and the Parent's state gets updated.
  - The updated state value is then passed back to the Child as a prop.

  - _Flow_: Parent State → Child (via props) → Child calls function → Parent updates state → New value → Child

- **props.children** is used to display whatever content the parent puts inside the child component's opening and closing tags.

**Prop Drilling**

- Props drilling means passing the same data through multiple components just to reach a deeply nested child.
- Some middle components don't need the data — they only pass it to the next component.

**Conditional Rendering**
- Showing/hiding UI elements based on a condition
- Ternary operator = {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
- Logical && — render something ONLY if true =  {hasNewMessages && <p>You have new messages!</p>}
- Elegant alternative — object lookup
- Rendering nothing — return null

**Keys**
- key gives each list item a unique identity, so React can track which item was added, removed, changed, or moved.
- Use a stable unique value like id as the key whenever possible.
- Using array index as key is okay only for static lists that never change, reorder, add, or remove items.
- The key should be placed on the outermost element returned by .map().
- key is a special React value and is not available inside the component as a normal prop.
- Using the value itself as a key is okay only when that value is unique and stable, e.g. key={fruit} for a list of unique fruits.













"Why can't you use a for loop directly inside JSX?" → JSX {} only accepts expressions, not statements; .map() is used instead since it's an expression that returns a new array.
"Why does React require a key prop for list items?" → helps React's diffing algorithm precisely track each item's identity across re-renders, so it can correctly determine what was added/removed/reordered instead of guessing by position.
"Why is using array index as key risky?" → if the list reorders or items are added/removed from the middle, index-based keys can cause React to misattribute state to the wrong item, leading to subtle bugs, especially with stateful list items (inputs, checkboxes).