import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="nav mx-auto">
          <NavLink className="p-3 nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="p-3 nav-link" to="/Shop">
            Shop
          </NavLink>
          <NavLink className="p-3 nav-link" to="/Cart">
            Cart
          </NavLink>
          <NavLink className="p-3 nav-link" to="/Contact">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
