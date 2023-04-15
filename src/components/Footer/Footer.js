import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="footer">
      <p>copyright @2023 by-Shreyansh Kaushik</p>
      <div className="social">
        <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
        <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
        <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
      </div>
    </div>
  );
}
