import { Link } from "react-router-dom";
import "./Navbar.scss";
import { APP_CONFIG } from "../config/app";
import { ROUTES } from "../config/routes";

export default function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <Link to="home" className="navbar-header">
        {APP_CONFIG.name}
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to={ROUTES.home} className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to={ROUTES.login} className="navbar-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
