import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../main';

const NavBar = () => {

  const {setIsAuthorized} = useContext(Context)

  const logout = () => {
    setIsAuthorized(false);
  }
  return (
    <div className='w-full bg-black text-white flex items-center justify-between p-4'>      
           
      <div className='ml-auto flex space-x-6'>
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/product" className="hover:text-blue-400">Product</Link>
        <Link to="/user" className="hover:text-blue-400">User</Link>
        <Link to="/contact"  className="hover:text-blue-400">Contact</Link>
        <button onClick={logout} className=" text-white hover:text-blue-400">
          Logout
        </button>
      </div>
      
    </div>
  );
};

export default NavBar;
