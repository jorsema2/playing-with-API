import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const Searcher = (props) => {
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
    };

    function handleForm(e) {
        e.preventDefault();
        setValue("");
        fetch(`https://api.github.com/users/${value}`)
        .then(data => data.json())
        .then(data => {
            props.setUser(data);
        });
    };

    console.log('rerendering')

    return (
        <form onSubmit={handleForm}>
            <input onChange={handleChange} value={value}></input>
            <button >Search</button>
        </form>
    )
};

function UserInfo(props) {
    // useEffect(() => {
    //     fetch("https://api.github.com/users/octocat")
    //     .then(data => data.json())
    //     .then(data => {
    //         props.setUser(data);
    //     });
    //     // eslint-disable-next-line
    // }, []);

    return (
        <div>
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
            <Searcher setUser={setUser}  />
            <UserInfo user={user} setUser={setUser} input={input} setInput={setInput}  />
        </div>    
    )
};




ReactDOM.render(<UserSearcher />, document.getElementById("root"));


/**
 * 
 * class App extends React.Component {
    state = {
        user: {}
    }

    componentDidMount(){
        console.log('component was mounted');
        fetch("https://api.github.com/users/octocat")
        .then(data => data.json())
        .then(data => {
           this.setState({user: data})
        });
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component was updated', prevState, this.state)
    }

    render(){
        console.log('rendering');
    return <div>{this.state.counter}</div>
    }
}
 */