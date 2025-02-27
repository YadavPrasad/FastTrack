import { Link } from "react-router-dom";
import "./css/Login.css";

function Login() {
  return (
    <section className="LoginSection">
      <div className="InputBox">
        <form>
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
