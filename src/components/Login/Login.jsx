import React, { useState, useContext } from 'react';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")) || {});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleClick, setToggleClicked] = useState(false);

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  const navigate = useNavigate()

  const handleCreateUser = () => {
    const newUser = { email, password }; 
    
    const existingUser = JSON.parse(localStorage.getItem("users")) || []

    const alreadyUser = existingUser.some(user => user.email === email)
    
    if(alreadyUser){
      toast.error("User already exists!")
      return
    }
    
    existingUser.push(newUser);

    localStorage.setItem('users', JSON.stringify(existingUser));
    setUser(existingUser);      
    toast.success("User created successfully!")
    setName("")
    setEmail("")
    setPassword("")
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem("users")

    if(!storedUser){
      toast.error("Invalid email or password")
      return
    }

    const user = storedUser ? JSON.parse(storedUser) : []

    const matchedUser = user.find(user => user.email === email && user.password === password)

    if(matchedUser){
      localStorage.setItem("loggedUser", JSON.stringify(matchedUser))
      setLoggedUser(matchedUser)

      localStorage.setItem("isAuthorized", true)
      setIsAuthorized(true)

      
      toast.success("Login succesful!")
      navigate("/")

      setEmail('')
      setPassword('')

    }else{
      setIsAuthorized(false)
      toast.error("Invalid email or password.")
    }    
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen  mx-auto p-4'>
        <div className='flex flex-row justify-center border border-gray-300 rounded-md'>
          {/* Left side */}
          <div className='flex flex-col gap-4 p-5'>
            <p className='text-3xl text-black font-semibold'>Welcome back to Shopify Login</p>
            <span className='text-gray-500'>Its good to have you back!</span>
            
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor="email">Email:</label>
              <input type="email" placeholder='Enter your email here...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='outline-none border bg-gray-300 px-2 py-1 rounded-md'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor="password">Password:</label>
              <input type="password" placeholder='Enter your password here...'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='outline-none border bg-gray-300 px-2 py-1 rounded-md'
              />
            </div>
            <div className='flex gap-4 justify-center items-center mt-5'>
              <button onClick={handleLogin} className='bg-pink-600 text-white rounded-md px-3 py-1'>Login</button>
              <button onClick={handleCreateUser} className='text-pink-600 border border-pink-600 rounded-md px-2 py-1'>Create Account</button>
            </div>
          </div>
          
          {/* Right side */}
          <div className='md:block hidden'>
            <img 
            src="https://www.justgeek.fr/wp-content/uploads/2023/01/generateur-image-ia-gratuit.jpg"
             alt="login image" 
              className='w-[500px] h-[380px] rounded-tr-md rounded-br-md'
            />
          </div>
        </div>
      </div>
    </>
   
  );
};

export default Login;
