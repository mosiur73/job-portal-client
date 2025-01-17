import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import jobIcon from '../../assets/jobLogo.png'

const Navbar = () => {
    const {user,signOutUser}=useContext(AuthContext)

    const handleSignOut=()=>{
        signOutUser()
        .then(()=>{
          console.log('sign out successfully ');
          
        })
        .catch(()=>{
          console.log(error.message)
        })
    }
    const links=<>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/">About</NavLink></li>
     <li><NavLink to="/">Contact</NavLink></li>
     <li><NavLink to="/myApplication">MyApplication</NavLink></li>
   
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <img src={jobIcon} alt="" />
    <a className="btn btn-ghost text-xl text-violet-900">Job Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
         {
            user? <button onClick={handleSignOut} className='btn btn-warning'>Logout</button> :
            <>
            <Link className='text-teal-950 underline' to='/signup'>Register</Link>
            <Link to="/login">
            <button className='btn btn-warning'>Login</button>
            </Link>
            </>
         }
   
  </div>
</div>
        </div>
    );
};

export default Navbar;