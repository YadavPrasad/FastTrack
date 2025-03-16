import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useState} from "react";
import "./css/Login.css";
import axios from "axios";

function Signup() {
  
    const navigate = useNavigate();
    const [pwdVisibility, setpwdVisibility] = useState(false);

    const sendSignup = async(e) => {


      e.preventDefault() //Prevents page reload

      const user = document.getElementById("email");
      const pass = document.getElementById("password");
      const Cpass = document.getElementById("Cpassword");

      if(pass.value != Cpass.value) {
        alert("Passwords do not match");
        return;
      }

      await axios
        .post("https://fasttrack-1cl0.onrender.com/signup", {
          Username : user.value,
          password : pass.value,
        })
        .then((res) => {
          console.log("Response :", res.data);
          navigate("/Login")
        })
        .catch((err) => console.log("Error :", err));
    }

  return (
    <section className="LoginSection">
      <div className="InputBox">
        <form onSubmit={sendSignup}>
        <center><h1>SIGN UP</h1></center>
          <label htmlFor="email">Email:</label> <br />
          <input type="email" id="email" required  /> <br />
          <label htmlFor="password">Password:</label> <br />
          <input type={pwdVisibility ?  "text" : "password"} id="password" required />
          <br />
          <label htmlFor="Cpassword">Confirm Password:</label> <br />
          <input type={pwdVisibility ? "text" : "password"} id="Cpassword" required />
          <br />
          <button type="submit">Signup</button>
          <p>
          Already have an account?<Link to="/Login" className="Loginlink">Login</Link>
          </p>
        </form>
        <button
          className = "ShowPass"
          onClick = {() => {setpwdVisibility(!pwdVisibility)}}>
            Show Password
        </button>
      </div>
    </section>
  );
}
export default Signup;