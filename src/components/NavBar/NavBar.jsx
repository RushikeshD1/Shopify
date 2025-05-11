import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../main';
import { toast } from 'react-toastify';
import { CgProfile } from "react-icons/cg";

const NavBar = () => {

  const [loggedEmail, setLoggedEmail] = useState("")

  const {setIsAuthorized} = useContext(Context)


  const handleLogout = () => {
    localStorage.setItem("isAuthorized", false)
    setIsAuthorized(false);
    toast.success("User logged out succesful!")
  }

  useEffect(() => {
    const { email } = JSON.parse(localStorage.getItem("loggedUser"))
    setLoggedEmail(email)
  }, [])

  return (
    <div className='w-full bg-black text-white flex items-center justify-between p-4'>      
           
      <div className='ml-auto flex align-middle space-x-6'>
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/product" className="hover:text-blue-400">Product</Link>
        <Link to="/user" className="hover:text-blue-400">User</Link>
        <Link to="/contact"  className="hover:text-blue-400">Contact</Link>
        <div className=' relative group'>
          <CgProfile className='w-6 h-6 cursor-pointer'/>

          <div 
          className='bg-white absolute right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity p-2 text-black flex items-center justify-center flex-col gap-2'>
              <span >{loggedEmail}</span>
              <button
                className='px-2 py-1 bg-pink-500 text-white rounded-md'
              onClick={handleLogout}>Logout</button>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
