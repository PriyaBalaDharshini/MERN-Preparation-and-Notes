import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

//Updating an Object in State — correct way
const [user, setUser] = useState({ name: "Priya", age: 30 })

function updateAge() {
  setUser({ ...user, age: 31 })
}

//Updating an Array in State — correct way
const [items, setItems] = useState(["apple", "banana"]);

function addItem() {
  setItems([...items, "mango"]);   // ✅ spread old array, add new item at end
}


//Updating one item in an array of objects
const [users, setUsers] = useState([
  { id: 1, name: "John" },
  { id: 2, name: "Mary" }
]);

function updateUser(id, newName) {
  setUsers(users.map(user =>
    user.id === id ? { ...user, name: newName } : user
  ));
}

function handleButton() {
  function sayHi(name) {
    console.log('Hi', name);
  }
  return (
    <button onClick={() => sayHi("Priya")}>Click Me</button>
  );
}

function Input() {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return <input onChange={handleChange} />;
}

function Form() {

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Submit</button>
    </form>
  )
}

function NameInput() {
  coonst[name, setName] = useState("")

  return (
    <input
      value={name} // value comes FROM state
      onChange={(e) => setName(e.target.value)} // every change UPDATES state
    />
  )
}

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function handleLogin(e) {
    e.preventDefault()
    console.log(email, password);
  }
  return (
    <form onSubmit={handleLogin}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  )
}

//Text input
const [text, setText] = useState("")
  (<input type='text' value={text} onChange={(e) => setText(e.target.value)} />)

//Textarea
const [message, setMessage] = useState("");
<textarea value={message} onChange={(e) => setMessage(e.target.value)} />

//checkbox
const [isChecked, setIsChecked] = useState(false)
  (
    <input type='checked' value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
  )

//Radio Button
const [gender, setGender] = useState("")
  (
    <>
      <input
        type='radio'
        value='male'
        checked={gender === 'male'}
        onChange={(e) => setGender(e.target.value)} />

      <input
        type='radio'
        value='female'
        checked={gender === 'female'}
        onChange={(e) => setGender(e.target.value)} />
    </>
  )

//Select (dropdown)

const [fruit, setFruit] = useState("apple")

  (
    <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
    </select>
  )


function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    agreeToTerms: false,
    hobbies: [],
    gender: "",
    country: ''

  })

  function handleChange(e) {
    const { name, value, checked, type } = e.target
    if (type === "checkbox" && name === 'hobbies') {
      hobbies: checked ? [...formData.hobbies, value] : formData.hobbies.filter((hobby) => hobby !== value)
    }
    else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value
      })
    }

  }

  return (
    <form>
      <input name="userName" value={formData.userName} onChange={handleOnChange} />
      <input name="email" value={formData.email} onChange={handleOnChange} />
      <input name="pasword" value={formData.password} onChange={handleOnChange} />
      <label>
        <input type='checkbox' name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
        Agree to Terms</label>
      {/* Mutiple Checkbox */}
      <label>
        <input type='checkbox' name='hobbies' value='Reading' checked={formData.hobbies.includes("Reading")} onChange={handleChange} />
        Reading</label>
      <label>
        <input type='checkbox' name='hobbies' value='Writing' checked={formData.hobbies.includes("Writing")} onChange={handleChange} />
        Writing</label>
      <label>
        <input type='checkbox' name='hobbies' value='Drawing' checked={formData.hobbies.includes("Drawing")} onChange={handleChange} />
        Drawing</label>
      {/* Radio Button */}
      <label>
        <input type='radio' name='gender' value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
        Male
      </label>
      <label>
        <input type='radio' name='gender' value="Femal" checked={formData.gender === "Female"} onChange={handleChange} />
        Male
      </label>
      {/* Dropdown */}
      <p>Country:</p>
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

    </form>
  )
}


function UserProfil() {
  const [user, setUser] = useState("")
  useEffect(() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => setUser(data))
  })

  return <div>{user ? user.name : "Loading...."}</div>
}


function useCounter() {
  const [count, setCount] = useState("")

  function incrementCount() {
    setCount(count + 1)
  }
  return { count, incrementCount }
}


function Parent() {
  function receiveMessage(message) {
    console.log("Received:", message)
  }

  return <Child onSendMessage={receiveMessage} />
}

function Child({onSendMessage}){
  function handleClick(){
    onSendMessage("Hello from Child!");
  }
  return <button onClick={handleClick}>Send</button>;
}