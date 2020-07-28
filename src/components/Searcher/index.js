import React, { useState } from 'react';

export const Searcher = (props) => {
    const [value, setValue] = useState("");
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    function handleForm(e) {
      e.preventDefault();
      if(props.users.length >= 2) {
          return;
      }
      setValue("");
      fetch(`https://api.github.com/users/${value}`)
        .then((data) => data.json())
        .then((data)  => {
              props.setUsers([...props.users, data]);
          }
        ).catch(function (error) {
          console.log(error); // Error!
        });
    }
  
    return (
      <form onSubmit={handleForm}>
        <input  onChange={handleChange} value={value}></input>
        <button>Search</button>
      </form>
    );
  };