import React, {useState} from "react";
import UsersInfo from './components/UsersInfo'
import { Searcher } from './components/Searcher'

const App = () => {
    const [users, setUsers] = useState([]);
  
    return (
      <div>
        <Searcher setUsers={setUsers} users={users} />
        <UsersInfo users={users} />
      </div>
    );
  };

export default App;