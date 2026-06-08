import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>

      
      <nav className="navbar">
  <h2>Flipkart</h2>

  <input
    type="text"
    placeholder="Search for products..."
    className="search"
  />

  <div>
    <Link to="/">
      <button>Home</button>
    </Link>

    <Link to="/login">
      <button>Login</button>
    </Link>

    <Link to="/register">
      <button>Register</button>
    </Link>

    <Link to="/cart">
      <button>Cart</button>
    </Link>
  </div>
</nav>

      {/* Paste Routes here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;