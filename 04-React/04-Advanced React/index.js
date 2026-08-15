const { useState, memo } = require("react");

function Parent() {
    const [count, setCount] = useState("")

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <Child />
        </div>
    )
}

const Child = memo(function Child() {
    console.log("Child rendered");
    return <p>I am a child component</p>;
})

import { useMemo } from 'react';

function ProductList({ products }) {
    const expensiveTotal = useMemo(() => {
        console.log("Calculating total...");
        return products.reduce((sum, p) => sum + p.price, 0);
    }, [products]);   // only recalculate when 'products' changes

    return <p>Total: {expensiveTotal}</p>;
}

import { useCallback } from 'react';

function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);   // same function reused across renders, never recreated

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <Child onClick={handleClick} />
        </div>
    );
}


const myRef = useRef(initialValue);   // returns { current: initialValue }
myRef.current;        // read the value
myRef.current = x;     // change the value (no re-render happens)


//Step 1 - Create Context

import { createContext } from 'react';

const UserContext = createContext();
//This creates a "Context" — think of it as a shared box that 
// any component can put data into, or take data out of.

//Step 2 — Provider (puts data INTO the box)
function App() {
  const user = { name: "John" };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

//UserContext.Provider wraps around components, and value={user} puts user into the shared box.
// Any component inside this Provider (no matter how deeply nested) can now access user.

//Step 3 — useContext (takes data OUT of the box)

import { useContext } from 'react';

function UserPanel() {
  const user = useContext(UserContext);   // directly grabs the value, skips ALL middle components
  return <p>{user.name}</p>;
}