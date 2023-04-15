import React, { useState, useEffect, useReducer } from "react";
import "./ProductListing.css";
import { useProductContext } from "../../context/productcontex";

export default function ProductListing(props) {
  // const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const { isLoading, products } = useProductContext();
  if (isLoading) {
    return <div>......Loading</div>;
  }

  // Logic for displaying products
  const productsPerPage = 10;
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentPoducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products?.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleClick(event) {
    setPage(event.target.id);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <div className="wrapper">
      <div className="product-list">
        {currentPoducts !== undefined &&
          currentPoducts.map((item) => {
            return (
              <div className="product-card">
                <img src={item.productImages[0]} alt="ddfddfdffd" />
                <div className="product-name">
                  <p>{item.productName}</p>
                </div>
                <div className="btn">Show Price</div>
              </div>
            );
          })}
      </div>
      {<ul id="page-numbers">{renderPageNumbers}</ul>}
    </div>
  );
}