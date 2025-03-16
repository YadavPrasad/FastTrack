import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../assets/image.png";
import logo1 from "../assets/image(1).png";
import logo2 from "../assets/image 2.png";
import logo3 from "../assets/image 4.png";
import logo4 from "../assets/image 3.png";

const Navbar = ({ isLoggedIn, username, handleLogout }) => {
  return (
    <header>
      <nav className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} style={{ height: "90px", position: "relative", left: "5px" }} />
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "orange", marginLeft: "-20px" }}>
            FastTrack
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <img src={logo1} style={{ height: "20px", position: "relative", top: "5px", left: "2px" }} />
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <img src={logo2} style={{ height: "20px", position: "relative", top: "3.6px" }} />
            <Link to="/order" className="link">My Orders</Link>
          </li>
          <li>
            <img src={logo3} style={{ height: "25px", position: "relative", top: "1.5px", right: "3px" }} />
            <Link to="/contact" className="link" style={{ position: "relative", bottom: "4.7px", right: "4px" }}>
              Contact Us
            </Link>
          </li>
          <li>
            <img src={logo4} style={{ height: "20px", position: "relative", top: "3.6px", right: "1.2px" }} />
            {isLoggedIn ? (
              <span className="user-menu">
                <span className="user-greeting">{username}</span>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </span>
            ) : (
              <Link to="/login" className="link">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
