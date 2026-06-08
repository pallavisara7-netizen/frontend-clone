import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        Flipkart
      </div>

      <input
        className="search"
        placeholder="Search for products, brands and more"
      />

      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
      </div>

    </div>
  );
}

export default Navbar;