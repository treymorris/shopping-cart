import { NavLink } from "react-router-dom";

let activeStyle = { display: "none" }
function Nav() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="nav mx-auto">
          <NavLink
            className="p-3 nav-link"
            to="/shopping-cart"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            className="p-3 nav-link"
            to="/shop"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shop
          </NavLink>
          <NavLink
            className="p-3 nav-link"
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Cart
          </NavLink>
          <NavLink
            className="p-3 nav-link"
            to="/checkout"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Checkout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
