import React, { useState } from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";

const LoginPage = () => {

const [auth,setAuth] = useState(true); 




  return (
    <>
      <div className="w-screen	h-screen flex flex-col justify-center  items-center	 ">
        <h1>Oee app Log in</h1>
        <input type="text" placeholder="user name" className="w-60 h-10 m-3 border border-sky-500 rounded focus:outline-none"/> 
        <input type="password" placeholder="password" className="w-60 h-10 m-3 border border-sky-500 rounded focus:outline-none" />
        {auth ? <Link to='/'>
        <button className="w-40 h-14 bg-red-500 rounded ">Log In</button>
        </Link> : 'invalid user'}
    
      </div>
      <NavBar  />
    </>
  );
};

export default LoginPage;
