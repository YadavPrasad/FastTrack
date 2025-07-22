import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import axios from "axios";
import { useState } from "react";

function Login({ setIsLoggedIn, setUsername }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkCredentials = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://fasttrack-1cl0.onrender.com/login", { Username: email, password });
      if (res.status === 200) {
        setIsLoggedIn(true);
        setUsername(email);
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <section className="LoginSection">
      <div className="InputBox">
        <form onSubmit={checkCredentials}>
          <center><h1>LOGIN</h1></center>
          <label>Email:</label> <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
          <label>Password:</label> <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <button type="submit">Login</button>
          <p>Create an account? <Link to="/signup" className="Loginlink"> Signup</Link></p>
        </form>        
      </div>
    </section>
  );
}

export default Login;
