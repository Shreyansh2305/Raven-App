import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBasketShopping
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <nav>
      <div className="logo" onClick={handleClick}>
        Raven
      </div>
      <ul>
        <li onClick={handleClick}>Home</li>
        <li>Products</li>
        <li>About US</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <FontAwesomeIcon className="header-icon" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="header-icon" icon={faBasketShopping} />
      </div>
    </nav>
  );
}
