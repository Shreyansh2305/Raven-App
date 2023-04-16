import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
// import { ProductListing } from "../ProductListing/ProductListing";
import { useProductContext } from "../../context/productcontex";

export default function Home() {
  const { isCategoryLoading, categoryList, setHome } = useProductContext();
  setHome();
  console.log(categoryList);

  let navigate = useNavigate();

  function handleClick(e) {
    console.log(e);
    categoryList !== undefined &&
      categoryList.forEach((item) => {
        if (item.categoryName == e.target.innerText) {
          navigate(`/productListing/id=${item.id}`);
        }
      });
  }

  if (isCategoryLoading) {
    return <div>......Category Loading</div>;
  }

  return (
    <div className="wrapper">
      {categoryList !== undefined &&
        categoryList.map((category) => (
          <div className="category" onClick={handleClick}>
            <img
              src={`http://static.prodo.in${category.categoryImages}`}
              alt="category"
            />
            <p>{category.categoryName}</p>
          </div>
        ))}
    </div>
  );
}
