import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { AddUser } from "./AddUser";

export function UserList() {
  const { state, dispatch } = useContext();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => dispatch({ type: "GET_USERS", payload: data }));

  return (
    <>
      <AddUser />
      <ul>
        {state.users.map((user, index) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
