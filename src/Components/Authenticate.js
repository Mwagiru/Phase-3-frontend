import React, { useState } from 'react'
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

function Authenticate() {
      const [email, setEmail] = useState();
      const [password, setPassword] = useState("");
      const [user, setUser] = useState({});
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });

   	let navigate = useNavigate();

     const login = async (e) => {
       e.preventDefault();
       try {
         const user = signInWithEmailAndPassword(auth, email, password);
         console.log(user);
       } catch (error) {
         alert(error.message);
       }
     };
     
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };
      const logout = async (e) => {
        e.preventDefault();
        await signOut(auth);
      };
  return (
    <>
      <div className="login_container">
        <h4>User Logged In:</h4>
        {user?.email}
        <h2>Login</h2>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            required
            placeholder='Email Here...'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="login_signin" onClick={login}>
            Sign In
          </button>
          <p>
            If you have not created your account, click the button below to
            create a new account
          </p>
          <button className="login_register" onClick={register}>
            Create Account
          </button>
          <button className="login_Logout" onClick={logout}>
            Log Out
          </button>
        </form>
      </div>
    </>
  );
}

export default Authenticate