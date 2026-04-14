import React from 'react';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';


const Navbar = () => {
    return (
        <div>
          <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-xl"><img src="../../../assets/logo.png" alt="" /></a>
  </div>
 
  <div className="navbar-end">
    <a className="btn"> <FaHome />Home</a>
    <a className="btn"><RiTimeLine />Timeline</a>
    <a className="btn"><ImStatsDots />Stats</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;