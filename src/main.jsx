import { createContext, StrictMode, useContext, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

export const Context = createContext();

const AppWrappar = () => {
    const [isAuthorized, setIsAuthorized] = useState(localStorage.getItem('isAuthorized', "false"));
    const [user, setUser] = useState(localStorage.getItem("users") || {})

    useEffect(() => {
      if(user && Object.keys(user).length > 0){
        localStorage.setItem("users", JSON.stringify(user))
        localStorage.setItem("isAuthorized", "true")
      }else{
        localStorage.removeItem('user');
        localStorage.setItem('isAuthorized', 'false');
      }
    }, [user])

    return (
      <Context.Provider value={{isAuthorized, setIsAuthorized, user, setUser}}>
        <App />
      </Context.Provider>
    )
}

createRoot(document.getElementById('root')).render(
  <AppWrappar />
)
