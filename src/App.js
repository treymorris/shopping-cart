import "./App.css";

import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
