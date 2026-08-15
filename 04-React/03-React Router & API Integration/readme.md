**React Router**

- **BrowserRouter** — wraps your app, enables routing using browser URL/history. Used once, at the top level (main.jsx/App.jsx), wrapping everything. No page reload, no re-render (just sets up routing).

- **Routes + Route** — define which component shows for which URL path. Used wherever you decide what to render based on URL. No page reload, but causes a React re-render (swaps the matched component when URL changes — normal and expected).

- **Link** — navigate without full page reload, use instead of `<a>`. Used for any clickable navigation link (navbar, buttons, cards). No page reload, causes a React re-render of the matched Route's component.

- **NavLink** — same as Link, but knows if it's the currently active route, for styling. Used in navigation menus/navbars where you want to highlight the current page. No page reload, causes a React re-render same as Link, plus active-check logic.

- **Outlet** — placeholder inside a shared layout component, where the matching child route's content renders. Used inside a layout component that has nested/child routes (e.g., dashboard with sidebar). No page reload, only the inner content re-renders — the surrounding layout stays untouched.

- None of these cause a browser page reload — that's the whole point of React Router (keeps SPA behavior).
- Routes, Link, NavLink all cause a normal React re-render of the matched component — this is expected, not a problem.
- Outlet is the most efficient — it re-renders only the inner swapped content, keeping the parent layout (like a navbar/sidebar) untouched.

**Dynamic Routing**

- Dynamic routes are routes that change based on a value in the URL, like /users/:id
- **useParams** — reading the parameter's actual value
  - Inside the component, you use the useParams hook to read what value was actually in the URL
  - params are always STRINGS
- **useNavigate** - useNavigate is a React Router hook used to move the user to another page using JavaScript, without clicking a link.

- Link → user CLICKS something to navigate (a visible link/button in JSX)
- useNavigate → navigation happens as a RESULT of some logic/code (after a function runs, a condition is met, a timer fires)

**API Integration**

- can use async/await instead of .then
- you can't make the useEffect callback itself async directly (useEffect(async () => {...}) is not allowed) — instead, define an async function inside the effect and call it, as shown above.
- **Axios** — an alternative to fetch
  - Axios is a popular third-party library for making HTTP requests — does the same job as fetch, but with a slightly different, often more convenient API.
  - with Axios, you don't need to call .json() at all. Axios already parses the JSON response for you.

**Error**
- Fetch — must manually check response.ok
-  Axios — automatically throws/rejects on 404, 500, etc.
