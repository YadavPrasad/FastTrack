import {Link} from "react-router-dom";
import './css/Navbar.css'
const Navbar = () => {
    return(
        <header>
            <nav>
            <li className="navbar">
            <Link to="/" className="link">
                Home
            </Link>
            <Link to = '/order' className="link">
                My orders
            </Link>
            <Link to = '/contact' className="link">
                Contact us
            </Link>
            <Link to = '/login' className="link">
                Login
            </Link>
          </li>
            </nav>
        </header>
    )
}

export default Navbar;