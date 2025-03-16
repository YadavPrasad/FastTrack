import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Order from "./Components/Order.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <main>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="/order/:orderID" element={<Order isLoggedIn={isLoggedIn} username={username} />} />  
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
