import { useState, useContext } from "react";
import { UserContext } from "../App";

export function AddUser() {
    const [name, setName] = '';
    const { dispatch } = useContext();
  
    const addUser = () => {
      dispatch({ type: 'ADD_USER', payload: name });
      setName('');
    };
  
    return (
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={addUser}>Add User</button>
      </div>
    );
  }
