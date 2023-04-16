import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ProductListing.css";
import { useProductContext } from "../../context/productcontex";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function ProductListing() {
  const [page, setPage] = useState(1);
  const [checkeDate, setCheckeDate] = useState(false);
  const [checkedAlphabet, setCheckedAlphabet] = useState(false);
  const [filterInput, setFilterInput] = useState("");
  const [copyProducts, setCopyProducts] = useState([]);
  const { getProducts, isLoading, products } = useProductContext();
  // console.log(products);
 
  //  var cloned = JSON.parse(JSON.stringify(products));
  //  setCopyProducts(cloned);
  
   useEffect(() => {
    getProducts(
      `https://api.prodo.in/products/category/${id}?limit=100&page=1`
    );
  }, []);
  
  
  //for filter operation
  let filter;
  // if(filterInput === "")
    
  function handleChange(e){
    setFilterInput(e.target.value);
  }
  
  if(filterInput !== null && filterInput !== "Availability")
    filter = products.filter((data)  => data.productName === filterInput);
  // console.log(filter);
  

  const location = useLocation();
  const id = location.pathname.split("/").at(-1);

  if (isLoading) {
    return <div className="loading">......Loading</div>;
  }

  // Logic for displaying products
  const productsPerPage = 10;
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // console.log(currentProducts);

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
    <div className="wrapper-product">
      <div className="filter">
        <div className="input-wrapper">
          
          <div className="input">
            <h3>Name</h3>
            <input 
              type="text" 
              placeholder="Enter name to filter"
              onChange={handleChange}></input>
          </div>
          <div className="input" style={{display: 'flex', justifyContent: 'space-around'}}>
            <h3>Availability</h3>
            <input 
              type="checkbox" 
              value={'avalability'}
              onChange={handleChange}></input>
          </div>
          
        </div>
        
        <div className="sort-wrapper">

          <div className="sort" style={{display: 'flex', justifyContent: 'space-around'}}>
            <h3>Date Sort</h3>
            <input 
            type={"checkbox"} 
            value={"Date"} 
            checked={checkeDate}
            onChange={() => {
              setCheckeDate(!checkeDate);
              if(!checkeDate){ 
                setCheckedAlphabet(false)
                 products.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
                });
                }
              }
            }></input>
          </div>
          <div className="sort" style={{display: 'flex', justifyContent: 'space-around'}}>
            <h3>Alphabet Sort</h3>
            <input 
            type={"checkbox"} 
            value={"Alphabetical_Order"}
            checked={checkedAlphabet}
            onChange={() => 
            {setCheckedAlphabet(!checkedAlphabet);
            if(!checkedAlphabet){  
              setCheckeDate(false)
              products.sort((a, b) =>
              a.productName > b.productName ? 1 : -1,
              );
              }}
            }
            ></input>
          </div>
          
        </div>
      </div>
      
      <div className="product-wrapper">
        
        <div className="product-list">
          {currentProducts !== undefined &&
            currentProducts.map((item) => {
              return (
                
                <NavLink 
                  to={`/productListing/${item.categoryId}/${item.id}`}
                  style={{textDecoration: 'none'}}>
                  <div className="product-card">
                    <img src={item.productImages[0]} alt="ddfddfdffd" />
                    <div className="product-name">
                      <p>{item.productName}</p>
                    </div>
                    <div className="btn">Show Price</div>
                  </div>
                </NavLink>
                
              );
            })}
        </div>
        {<ul id="page-numbers">{renderPageNumbers}</ul>}
        
      </div>
    </div>
  );
}
