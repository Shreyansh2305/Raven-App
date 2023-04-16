import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProductContext } from "../../context/productcontex";
import { NavLink } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { productName, inventoryDetails, productImages, variants } =
    singleProduct;
  // const image = singleProduct?.productImages[0];

  const location = useLocation();
  const id = location.pathname.split("/").at(-1);
  // console.log("id" + id);

  useEffect(() => {
    getSingleProduct(`https://api.prodo.in/products/${id}`);
  }, []);

  if (isSingleLoading) return <div className="loading">......Loading</div>;

  return (
    <div className="wrapper-single">
      <div className="page-navigation">
        <NavLink to="/">Home</NavLink>/{productName}
      </div>

      <div className="main-container">
        <div className="grid">
          {/* product image */}
          <div className="product-image">
            <img
              src={productImages?.[0]}
              alt="Poduct"
              style={{ height: "500px", width: "500px" }}
            />
          </div>

          {/* product data */}
          <div className="product-data">
            <h2>{productName}</h2>
            <p style={{ color: "#bfbfbf" }}>{inventoryDetails?.description}</p>
            <div>
              <p>
                Available Stocks:&nbsp;&nbsp;
                <span style={{ color: "#bfbfbf" }}>
                  {inventoryDetails?.available_stock > 0
                    ? "In Stock"
                    : "Not Available"}
                </span>
              </p>
            </div>
            <p>
              ID:&nbsp;&nbsp;<span style={{ color: "#bfbfbf" }}>{id}</span>
            </p>
            <p>
              Brand:&nbsp;&nbsp;
              <span style={{ color: "#bfbfbf" }}>
                {inventoryDetails?.brand ? inventoryDetails?.brand : "None"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
