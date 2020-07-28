import React from 'react';
import User from '../User';
import UserComparator from '../UserComparator';
import './users-info.css'


function UsersInfo(props) {
    /* 
      Add conditional rendering: render two users when users.length = 2 
      Try to change "alt" dynamically, so it would say 'Avatar of the user called "octocat"'
      */
  
    return (
      <div className='users-info'>
        {props.users.map((user) => (
          <User user={user} />
        ))}
  
        {/*If there are two users chosen, compare them:*/}
        {props.users.length === 2 && <UserComparator users={props.users} />}
      </div>
    );
  }

  export default UsersInfo;