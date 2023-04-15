import React, { useState, useEffect, useReducer } from "react";
import { ProductListing } from "../ProductListing";

export default function ProductList() {
  const { isLoading, products } = ProductListing();
  const [page, setPage] = useState(1);

  if (isLoading) {
    return <div>..........Loading</div>;
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
        {products !== null &&
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
