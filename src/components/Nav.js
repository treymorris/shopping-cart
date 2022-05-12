import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="nav mx-auto">
          <NavLink className="p-3 nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="p-3 nav-link" to="/shop">
            Shop
          </NavLink>
          <NavLink className="p-3 nav-link" to="/cart">
            Cart
          </NavLink>
          <NavLink className="p-3 nav-link" to="/contact">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
