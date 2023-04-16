import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../../context/productcontex";

export default function Home() {
  const { isCategoryLoading, categoryList } = useProductContext();
  // setHome();
  // console.log(categoryList);

  if (isCategoryLoading) {
    return <div className="loading">......Loading</div>;
  }

  return (
    <div className="wrapper">
      {categoryList !== undefined &&
        categoryList.map((category) => (
          <NavLink to={`/productListing/${category.id}`}>
            <div className="category">
              <img
                src={`http://static.prodo.in${category.categoryImages}`}
                alt="category"
              />
              <p>{category.categoryName}</p>
            </div>
          </NavLink>
        ))}
    </div>
  );
}
