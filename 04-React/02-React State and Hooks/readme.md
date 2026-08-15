**State**

- State is data that a component stores and manages itself.
- State can change over time
- When the state changes, React automatically re-renders the component with the new value.
- a regular variable changing does NOT trigger React to re-render the component. reactState might change internally, but React has no way of knowing it and updating it.
- The same component can be used multiple times. Each rendered instance gets its own separate state. Changing one instance's state does not affect the others.
  - _Instance_ - one individual copy of a component that React has created
- useState allows React to remember the previous state value, so it doesn't reset to the initial value on every render.
- React is storing and preserving state associated with that component's position/identity in the UI tree.

**Updating State**

- Direct Value / setCount(5);
- Function form (updater function) / setCount(prevCount => prevCount + 1);
- State updates are not immediate
  - Calling setState doesn't change state right away in that same function run. It tells React "please update this," and React updates it on the next render. So right after calling setState, the old state is still what you see in that same function.
- State updates are batched (grouped together)
  - If you call multiple setState functions in a row, React doesn't re-render after every single one — it waits, groups them together, and re-renders once. This makes things faster.

**Arrays & Objects in State**

- The main rule — never mutate state directly
  - When state is an array or object, you must never change it directly. You always create a new array/object and pass that to the setter.

**Event Handling**

- Basic event handling = return <button onClick={handleClick}>Click me</button>;
  - handleClick (no parentheses) passes the function itself. handleClick() (with parentheses) calls it immediately while rendering
- Passing arguments to an event handler = return <button onClick={() => sayHi("John")}>Greet</button>;
  -Since you can't write onClick={sayHi("John")} (that would call it immediately), you wrap it in an arrow function so it only runs when clicked.
- The event object
  - e is the event object — same idea as plain JS events. e.target is the actual element that triggered the event, e.target.value gives you what's typed.
  - Common events used in React
    1. <button onClick={handleClick}>Click</button>
    2. <input onChange={handleChange} />
    3. <form onSubmit={handleSubmit}>
    4. <input onKeyDown={handleKeyDown} />
    5. <input onFocus={handleFocus} onBlur={handleBlur} />
- preventDefault
  - without preventDefault(), submitting a form reloads the page, which would lose all your React state.
  - onClick → handles a button click.
  - onSubmit → handles the entire form submission.

**Controlled Components**

- A controlled component is an input whose value is fully controlled by React state
- The input's value always comes from state, and every keystroke updates that state.

**Form Inputs**

- Text input
- Text Area
- Checkbox
- Radio buttons
- Select (dropdown)

**useEffect**

- useEffect lets you run code after a component renders — used for things that aren't directly about showing UI, like fetching data, setting up timers, or manually working with the DOM.
- _Lifecycle_ : A component goes through 3 main stages. useEffect lets you run code at these stages, depending on how you use it.
  1. MOUNT → component appears on screen for the first time
  2. UPDATE → component re-renders (state/props changed)
  3. UNMOUNT → component is removed from screen
- Case 1: No dependency array — runs after EVERY render
  useEffect(() => {
  console.log("Runs after every render");
  });

- Case 2: Empty array [] — runs ONLY ONCE (on mount)
  useEffect(() => {
  console.log("Runs only once, when component first appears");
  },[]);

- Case 3: Array with values [value] — runs when THAT value changes
  useEffect(() => {
  console.log("Runs when 'count' changes");
  },[count]);

**Parent-Child Communication**

- the parent passes a function down to the child (as a prop). The child then calls that function whenever something happens. This is called a callback prop.

function Child({ onSendMessage }) {
function handleClick() {
onSendMessage("Hello from Child!"); // passing a VALUE to the function
}

return <button onClick={handleClick}>Send</button>;
}

function Parent() {
function receiveMessage(message) {
console.log("Received:", message);
}

return <Child onSendMessage={receiveMessage} />;
}

- Props only go parent → child directly
- To go child → parent, the parent gives the child a function (as a prop)
- The child calls that function (optionally passing data) whenever something happens
- This is the ONLY way a child can "talk back" to a parent

**Lifting state up**

- when 2+ components need to share the same data, move the useState to their closest common parent, then pass the value down as props, and pass an update function down as a callback prop

function TemperatureInput({ temp, onTempChange }) {
return <input value={temp} onChange={(e) => onTempChange(e.target.value)} />;
}

function TemperatureDisplay({ temp }) {
return <p>Current temp: {temp}</p>;
}

function Parent() {
const [temp, setTemp] = useState(""); // state now lives HERE, in the shared parent

return (

<div>
<TemperatureInput temp={temp} onTempChange={setTemp} />
<TemperatureDisplay temp={temp} />
</div>
);
}
1. State (temp) lives in Parent, not in either child
2. Parent passes 'temp' DOWN to BOTH children (as a normal prop)
3. Parent ALSO passes a function (onTempChange) DOWN to the input child
4. When user types, TemperatureInput calls onTempChange (the callback prop)
5. That function is actually setTemp, so it updates Parent's state
6. Parent re-renders, sending the NEW temp down to BOTH children again
7. TemperatureDisplay shows the updated value — even though the typing happened somewhere else!

**Custom Hooks**

- A custom hook is a normal JavaScript function that uses React hooks like useState or useEffect.
- We create it when we have some logic that we want to reuse in multiple components.

  **Rules of Hooks**
- Only call hooks at the TOP LEVEL — never inside conditions, loops, or nested functions
  function Component() {
  if (someCondition) {
  const [x, setX] = useState(0); // ❌ NEVER do this
  }
  }
  function Component() {
  const [x, setX] = useState(0); // ✅ always at the top level

  if (someCondition) {
  // conditional LOGIC is fine here, just not the hook call itself
  }
  }
  - Only call hooks from React function components, or from other custom hooks
  
    function regularFunction() {
    const [x, setX] = useState(0); // ❌ wrong — not a component or a hook
    }

function useMyHook() {
const [x, setX] = useState(0); // ✅ fine — this IS a custom hook
}

function MyComponent() {
const [x, setX] = useState(0); // ✅ fine — this is a component
}
