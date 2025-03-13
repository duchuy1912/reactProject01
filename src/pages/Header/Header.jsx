import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>My Website</h1>
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
