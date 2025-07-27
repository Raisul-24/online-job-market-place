import React, { useContext } from 'react';
import logo from '../assets/images/logo.png'; // Assuming you have a logo image in this path
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user } = useContext(AuthContext) // Replace with actual user state management
  console.log('User in Navbar:', user);
  return (
    <div className="navbar shadow-sm">
      <div className="flex-1">
        <div className="flex gap-1 items-center">
          <img className='w-auto h-7' src={logo} alt="" />
          <a className="font-bold text-xl">Online Job Matket</a>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <ul className="menu menu-horizontal px-1">
            <li><div className="">Home</div></li>
            {!user && (
              <li><Link to='/login'>Login</Link></li>
            )}
          </ul>
        </div>
        {user && (<div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a href="">Add Job</a></li>
            <li><a href="">My Posted Job</a></li>
            <li><a href="">My Bids</a></li>
            <li><a href="">Bid Requests</a></li>
            <li><Link to='/register'>Log Out</Link></li>
          </ul>
        </div>)}
      </div>
    </div>
  );
};

export default Navbar;