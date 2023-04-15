import "./styles.css";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductListing from "./components/ProductListing/ProductListing";
import NoPage from "./components/NoPage/NoPage";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/productListing/id=610811f7f774dd0104d0b62e"
            element={
              <ProductListing
                category_id="610811f7f774dd0104d0b62e"
                limit="100"
                page="1"
              />
            }
          />
          <Route
            path="/productListing/id=61081208f774dd0104d0b62f"
            element={
              <ProductListing
                category_id="61081208f774dd0104d0b62f"
                limit="100"
                page="1"
              />
            }
          />
          <Route
            path="/productListing/id=623af51151d7f22358800ace"
            element={
              <ProductListing
                category_id="623af51151d7f22358800ace"
                limit="100"
                page="1"
              />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
