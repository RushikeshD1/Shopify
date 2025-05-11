import { createContext, StrictMode, useContext, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const Context = createContext();

const AppWrappar = () => {

    const [isAuthorized, setIsAuthorized] = useState(localStorage.getItem('isAuthorized' , false));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("users")) || [])
    
    return (
      <Context.Provider value={{isAuthorized, setIsAuthorized, user, setUser}}>
        <App />
        <ToastContainer/>
      </Context.Provider>
    )
}

createRoot(document.getElementById('root')).render(
  <AppWrappar />
)