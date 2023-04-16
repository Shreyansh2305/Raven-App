import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBasketShopping
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <nav>
      <NavLink to={"/"} style={{textDecoration: 'none'}}>
        <div className="logo">
          Raven
        </div>
      </NavLink>
      <ul>
        <NavLink to={"/"} style={{textDecoration: 'none'}}><li>Home</li></NavLink>
        <NavLink to={"/products"} style={{textDecoration: 'none'}}><li>Products</li></NavLink>
        <NavLink to={"/about"} style={{textDecoration: 'none'}}><li>About US</li></NavLink>
        <NavLink to={"/contact"} style={{textDecoration: 'none'}}><li>Contact</li></NavLink>
      </ul>
      <div className="search">
        <FontAwesomeIcon className="header-icon" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="header-icon" icon={faBasketShopping} />
      </div>
    </nav>
  );
}
