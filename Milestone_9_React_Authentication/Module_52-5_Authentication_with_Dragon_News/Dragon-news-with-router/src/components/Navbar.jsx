import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthContext";



const Navbar = () => {

  const {user, logOut} = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged Out Successfully");
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" />
        
        {
          user ? 
          <button onClick={handleLogOut} className="btn btn-primary px-10" >Logout</button> : 
          <Link to='/auth/login' className="btn btn-primary px-10 ">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
