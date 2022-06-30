import React from 'react';
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
function Navbar() {
  let navigate = useNavigate();

  const logout = async (e) => {
    e.preventDefault();
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">
        <h1>QUOTSY</h1>
      </span>
      <button className="login_Logout" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

export default Navbar