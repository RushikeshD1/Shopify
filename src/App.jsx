import {BrowserRouter, Routes, Route, useNavigate, Navigate} from "react-router-dom"
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";
import User from "./components/User/User";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import { useContext, useState } from "react";
import { Context } from "./main";

const  App = () => {

  const {isAuthorized, setIsAuthorized, setUser} = useContext(Context)

  
  return (
    <>      
      <BrowserRouter>
        {isAuthorized && <NavBar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isAuthorized ? <Home /> : <Navigate to="/login" />}/>
          <Route path="/product" element={isAuthorized ? <Product />: <Navigate to="/login" />}/>
          <Route path="/user" element={isAuthorized ? <User /> : <Navigate to="/login" />}/>
          <Route path="/contact" element={isAuthorized ? <ContactUs /> : <Navigate to="/login" />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;