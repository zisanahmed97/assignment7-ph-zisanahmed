import React from 'react';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';





const Navbar = () => {
 
    
    return (
        <div>
          <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-xl"><img src="../../../assets/logo.png" alt="" /></a>
  </div>
 


<div className="navbar-end">
  
  <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? "btn bg-[#244D3F] text-white" : "btn"}
  >
    <FaHome /> Home
  </NavLink>

  <NavLink 
    to="/timeline" 
    className={({ isActive }) => isActive ? "btn bg-[#244D3F] text-white" : "btn"}
  >
    <RiTimeLine /> Timeline
  </NavLink>

  <NavLink 
    to="/stats" 
    className={({ isActive }) => isActive ? "btn bg-[#244D3F] text-white" : "btn"}
  >
    <ImStatsDots /> Stats
  </NavLink>

</div>



</div>
        </div>
    );
};

export default Navbar;