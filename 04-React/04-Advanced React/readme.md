**Performance — React.memo, useMemo, useCallback**

- The problem these solve — unnecessary re-renders
- When a component's state changes, React re-renders that component and all its child components — even if the child doesn't actually need to change.
- **React.memo** — skip re-rendering a component if its props didn't change
  - React.memo wraps a component and tells React: "before re-rendering this, check if its props actually changed. If not, skip re-rendering it, just reuse what was shown last time."
- **useMemo** — skip recalculating an expensive VALUE if inputs didn't change
  - Sometimes a component does a heavy calculation inside it, every single render — even if the inputs to that calculation haven't changed.
- **useCallback** — skip recreating a FUNCTION if it doesn't need to change
  - Every time a component re-renders, any function defined inside it gets recreated fresh — a brand new function in memory, even if it does exactly the same thing as before.
- useMemo → caches a VALUE (a number, an array, an object, a calculation result)
- useCallback → caches a FUNCTION itself

- **useRef** creates a "box" that can hold any value — and that value stays the same across re-renders, but changing it does NOT cause a re-render (unlike useState).
- Need it on screen → useState. Just need to remember it, no UI impact → useRef.

**A common, simple folder structure**
src/
├── components/ # small, reusable UI pieces
│ ├── Button.jsx
│ ├── Card.jsx
│ └── Navbar.jsx
├── pages/ # full page components (used with routing)
│ ├── Home.jsx
│ ├── About.jsx
│ └── UserProfile.jsx
├── hooks/ # custom hooks
│ └── useFetch.js
├── context/ # Context API files
│ └── ThemeContext.js
├── utils/ # helper functions (not components)
│ └── formatDate.js
├── assets/ # images, fonts, icons
├── App.jsx
└── main.jsx

**Simple rules to follow**

1. components/ → small, reusable pieces used in many places (Button, Card, Input)
2. pages/ → bigger components tied to a specific route/URL (Home page, Profile page)
3. hooks/ → custom hooks (functions starting with use)
4. One component per file, filename matches the component name
5. Group related files together (e.g., a UserCard folder with its own .jsx and .css file, if it's a bigger component)

- An **Error Boundary** is a component that catches errors in its children during rendering, and shows a fallback UI instead of crashing the whole app

1. Error Boundary → catches component crashes, shows fallback UI instead of a blank white screen
2. Loading state → shown while waiting for data
3. Error state → shown when something went wrong (API failed)
4. Empty state → shown when the request succeeded but there's simply no data to display

**Context API**

- Context API is a React feature that lets you share data between components without passing props through every parent and child component.
- When to use Context API: Use Context for data that's needed widely across many components — theme (dark/light mode), logged-in user info, language settings. Don't use it for everything — for data only needed by a couple of nearby components, regular props are simpler and fine.
