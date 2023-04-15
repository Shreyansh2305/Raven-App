import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { ProductListing } from "../ProductListing/ProductListing";
import { useProductContext } from "../../context/productcontex";

export default function Home() {
  const [data, setData] = useState(null);
  const { isCategoryLoading, categoryList } = useProductContext();
  console.log(categoryList);

  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.prodo.in/categories")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log("the error is " + error));
  }, []);

  function handleClick(e) {
    console.log(e);
    data.forEach((item) => {
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
