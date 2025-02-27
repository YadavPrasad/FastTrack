import { Link } from "react-router-dom";
import "./css/Login.css";

function Signup() {
  return (
    <section className="LoginSection">
      <div className="InputBox">
        <form>
        <center><h1>SIGN UP</h1></center>
          <label htmlFor="email">Email:</label> <br />
          <input type="email" id="email" required /> <br />
          <label htmlFor="password">Password:</label> <br />
          <input type="password" id="password" required />
          <br />
          <label htmlFor="password">Confirm Password:</label> <br />
          <input type="password" id="password" required />
          <br />
          <button type="submit">Signup</button>
          <p>
          Already have an account?<Link to="/Login" className="Loginlink">Login</Link>
          </p>
        </form>

      </div>
    </section>
  );
}
export default Signup;
