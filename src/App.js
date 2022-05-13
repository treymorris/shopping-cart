import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = () => {};

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop cart={cart} addItem={addItem} removeItem={removeItem} />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeItem={removeItem} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shop/:id"
            element={
              <Product cart={cart} addItem={addItem} removeItem={removeItem} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
