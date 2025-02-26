import React, { useState, useContext } from 'react';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  const navigate = useNavigate()

  const handleCreateUser = () => {
    const user = { username, password };    
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);  
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setIsAuthorized(true);
      navigate("/"); 
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCreateUser}
              className="w-1/2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Create
            </button>
            <button
              type="button"
              onClick={handleLogin}
              className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
