import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const Searcher = (props) => {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    };

    /*
    Array always has to have a length between 0 and 2
    Depending on the length of the array (use boolean or check length), modify first or second element of the array
    */
    function handleForm(e) {
        e.preventDefault();
        setValue("");
        fetch(`https://api.github.com/users/${value}`)
        .then(data => data.json())
        .then(function(data) {
            if (props.users.length < 2) {
                console.log(props.users);
                const newUsers = [...props.users, data];
                props.setUsers(newUsers);
            } else {
                console.log(props.users.pop())
                const newUsers = [data, props.users.pop()];
                props.setUsers(newUsers);
            }
        }, function(reason) {
            console.log(reason); // Error!
        });
    };

    return (
        <form onSubmit={handleForm}>
            <input onChange={handleChange} value={value}></input>
            <button >Search</button>
        </form>
    )
};

function UserComparator(props) {
    return (
        <div>
            {props.users[0].public_repos > props.users[1].public_repos &&
            <div>
                <p>{props.users[0].login} has more repos</p>
            </div>
            }
            {props.users[0].public_repos < props.users[1].public_repos &&
            <div>
                <p>{props.users[1].login} has more repos</p>
            </div>
            }
            {props.users[0].followers > props.users[1].followers &&
            <div>
                <p>{props.users[0].login} has more followers</p>
            </div>
            }
            {props.users[0].followers < props.users[1].followers &&
            <div>
                <p>{props.users[1].login} has more followers</p>
            </div>
            }
        </div>
    )
}

function UsersInfo(props) {
    // useEffect(() => {
    //     fetch("https://api.github.com/users/octocat")
    //     .then(data => data.json())
    //     .then(data => {
    //         props.setUser(data);
    //     });
    //     // eslint-disable-next-line
    // }, []);

    /* 
    Add conditional rendering: render two users when users.length = 2 
    Try to change "alt" dynamically, so it would say 'Avatar of the user called "octocat"'
    */

    return (
        <div style={{
            display: "flex", 
            justifyContent: "space-around"
            }}>
            {props.users.length > 0 &&
            <div>
                <p>Nickname: {props.users[0].login}</p>
                <img src={props.users[0].avatar_url} alt="Avatar of the user"></img>
                <p>Public repos: {props.users[0].public_repos}</p>
                <p>Followers: {props.users[0].followers}</p>
            </div>
            }
            {props.users.length === 2 &&
            <div>
                <p>Nickname: {props.users[1].login}</p>
                <img src={props.users[1].avatar_url} alt="Avatar of the user"></img>
                <p>Public repos: {props.users[1].public_repos}</p>
                <p>Followers: {props.users[1].followers}</p>
            </div>
            }
            {props.users.length === 2 &&
            <UserComparator users={props.users} />
            }
        </div>
    )
};

const UserSearcher = () => {
    const [users, setUsers] = useState([]);
    console.log(users);

    return (
        <div>
            <Searcher setUsers={setUsers} users={users}/>
            <UsersInfo users={users} />
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