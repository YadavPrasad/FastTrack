import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../assets/image.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} style={{ height: "90px" }} />
          <span
            style={{ fontSize: "20px", fontWeight: "bold", color: "orange" }}>
            FastTrack
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/order" className="link">
              My orders
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
