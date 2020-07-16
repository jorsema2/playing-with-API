import React, {useState} from "react";
import ReactDOM from "react-dom";

const Searcher = (props) => {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    };

    function handleForm(e) {
        e.preventDefault();
        props.setInput(value);
        console.log(value);
        setValue("");
        console.log(props.input);
    };

    return (
        <form onSubmit={handleForm}>
            <input onChange={handleChange} value={value}></input>
            <button onClick={props.setInput(props.input)}>Search</button>
        </form>
    )
};

function UserInfo(props) {
    fetch("https://api.github.com/users/octocat")
        .then(data => data.json())
        .then(data => {
            props.setUser(data);
        })
    return (
        <div>
            <Searcher input={props.input} setInput={props.setInput} />
            <p>{props.user.login}</p>
            <img src={props.user.avatar_url} alt="Avatar of the user"></img>
            <p>{props.user.id}</p>
        </div>
    )
};

const UserSearcher = () => {
    const [user, setUser] = useState({});
    const [input, setInput] = useState("");
    return (
        <div>
            <UserInfo user={user} setUser={setUser} input={input} setInput={setInput}/>
        </div>    
    )
};

ReactDOM.render(<UserSearcher />, document.getElementById("root"));