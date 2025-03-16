import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Order from "./Components/Order.jsx";
import Contact from "./Components/Contact.jsx";

import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <main>
      <BrowserRouter>
      <Navbar isloggedIn={isLoggedIn} /> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/Order" element={<Order/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;