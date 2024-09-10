import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Productlist from "./pages/admin/products/Productlist";
import Createproduct from "./pages/admin/products/Createproduct";
import { Footer } from "./pages/Footer";
import Home from "./pages/Header";
import Profile from "./pages/admin/products/Profile";
import About from "./pages/About";
import Createuser from "./pages/admin/products/Createuser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/products" element={<Productlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/products/create" element={<Createproduct />} />
        <Route path="/admin/products/createuser" element={<Createuser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
