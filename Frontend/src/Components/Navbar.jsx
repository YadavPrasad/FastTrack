import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../assets/image.png";
import logo1 from "../assets/image(1).png";
import logo2 from "../assets/image 2.png";


const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} style={{ height: "90px" }} />
          <span
            style={{ fontSize: "20px", fontWeight: "bold", color: "orange", marginLeft : "-20px" }}>
            FastTrack
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <img src={logo1} style={{ height: "20px" , position : "relative" , top : "4.1px"}} />
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
          <img src={logo2} style={{ height: "20px", position : "relative" , top : "3.6px"}} />
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
