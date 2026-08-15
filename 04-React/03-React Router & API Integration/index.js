import { useEffect, useState } from "react"

function UserProfile() {
    const { username } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`/api/users/${username}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [username])

    if (!user) return <p>Loading....</p>
    return <h1>{user.name}</h1>
}


function LoginForm() {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        // ... login logic ...
        navigate("/dashboard")
    }


    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>

        </form>
    )
}

useEffect(() => {
    async function sampleFunction() {
        const res = await fetch("https://api.example.com/users")
        const data = await res.json()
        setState(data)
    }
    sampleFunction()
}, [])


useEffect(() => {
    axios.get("https://api.example.com/users")
        .then(res => setState(res.data))
}, [])

useEffect(() => {
    async function sampleFn() {
        const res = await axios.get("https://api.example.com/users")
        setState(res.data())
    }
    sampleFn()
}, [])

// Fetch — must manually check response.ok
fetch(url).then(res => {
    if (!res.ok) throw new Error("Failed");
    return res.json();
});

// Axios — automatically throws/rejects on 404, 500, etc.
axios.get(url).catch(err => console.log(err));   // catches 404/500 automatically, no manual check needed


function UserSearch() {
    const [users] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "Mary" },
        { id: 3, name: "Sam" }
    ]);
    const [searchTerm, setSearchterm] = useState("")

    const filteredUser = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )


    return (
        <div>
            <input
                value={searchTerm}
                onChange={(e) => setSearchterm(e.target.value)}
                placeholder="Search users..." />

            <ul>
                {filteredUser.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}