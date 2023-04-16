import "./styles.css";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductListing from "./components/ProductListing/ProductListing";
import NoPage from "./components/NoPage/NoPage";
import SingleProduct from "./components/SingleProduct/SIngleProduct"
import ProductList from "./Products";
import About from "./About";
import Contact from "./Contact"

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productListing/:id" element={ <ProductListing /> }/>
          <Route path="/productListing/:id/:singleId" element={ <SingleProduct /> }/>
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
