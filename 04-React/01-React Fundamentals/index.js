function App() {
    const user = { name: 'John Doe', age: 30, email: 'john.doe@example.com' };
    const theme = 'dark';
    return <Dashboard user={user} theme={theme} />;
}

function Dashboard({ user, theme }) {
    return <Sidebar user={user} theme={theme} />
}

function Sidebar({ user, theme }) {
    return <UserPanel user={user} theme={theme} />
}

function UserPanel({ user, theme }) {
    return <UserDetails user={user} theme={theme} />
}


function Sample({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <p>Welcome</p> : <p>Please Login</p>}
        </div>
    );
}

function Message({ hasMessage }) {
    return (
        <div>
            {hasMessage && <p>You have a new message!</p>}
        </div>

    )
}


function StatusBadge({ status }) {
    const statusMap = {
        active: <span className="green">Active</span>,
        pending: <span className="yellow">Pending</span>,
    }
    return statusMap[status] || <span className="grey">Unknown</span>
}

function App1() {
    return (
        <Warning show={false} message="This is a warning message!" />
    )
}
function Warning({ show, message }) {
    if (!show) return null;
    return <p className="warning">{message}</p>;
}

function FruitsList() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
    return (
        <ul>
            {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
        </ul>
    )
}


// ❌ WRONG — key is on the inner element, not the outer one
{users.map(user => (
  <div>
    <p key={user.id}>{user.name}</p>
  </div>
))}

// ✅ CORRECT — key on the element .map() directly returns
{users.map(user => (
  <div key={user.id}>
    <p>{user.name}</p>
  </div>
))}