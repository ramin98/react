import React, { useReducer, createContext } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import { initialState, reducer } from "./reducer";
import { UserList } from "./components/UserList";
import { About } from "./components/About";

const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer();

  return (
    <UserContext.Provider value={{ state, dispatch }}>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about"> About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </UserContext.Provider>
  );
}

export default App;
