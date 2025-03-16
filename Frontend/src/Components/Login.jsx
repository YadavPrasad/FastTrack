import { Link } from "react-router-dom";
import "./css/Login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login({setIsLoggedIn}) {
  const navigate = useNavigate();
  const checkCredentials = async(e) => {
    e.preventDefault();
    const user = document.getElementById("email");
    const password = document.getElementById("password");

    await axios 
    .post("http://localhost:3002/login", {
      Username : user.value,
      password : password.value
    })
    .then((res) => {
      setIsLoggedIn(true);
      navigate("/");
    })
    .catch((err) => {console.log(err);})
  }



  return (
    <section className="LoginSection">
      <div className="InputBox">

        <form onSubmit={checkCredentials}>
        <center><h1>LOGIN</h1></center>
          <label htmlFor="email">Email:</label> <br />
          <input type="email" id="email" required /> <br />
          <label htmlFor="password">Password:</label> <br />
          <input type="password" id="password" required />
          <br />
          <button type="submit">Login</button>
          <p>
          Create an account?<Link to="/signup" className="Loginlink"> Signup</Link>
          </p>
        </form>

      </div>
    </section>
  );
}
export default Login;