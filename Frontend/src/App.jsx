import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Order from "./Components/Order.jsx";
import Contact from "./Components/Contact.jsx";

function App() {

  return (
    <main>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Order" element={<Order/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
