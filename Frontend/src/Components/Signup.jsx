import { Link } from "react-router-dom";

function Signup() {
  return (
    <section>
      <h1>Signup</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required /> <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required /><br />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account?<Link to='/login'>Login</Link></p>
    </section>
  );
}
export default Signup;