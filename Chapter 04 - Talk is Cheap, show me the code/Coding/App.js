import React from "react";
import ReactDOM from "react-dom";

// header
//   logo
//  nav items
// Body
//  search
//
//resto conatainer
//resto card - img, name of res, start,rating,cuisine,delivery time
//footer
//copyright
//links
//address
//contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
