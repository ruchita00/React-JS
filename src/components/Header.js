import React from 'react'
import { LOGO_URL } from '../Utils/constants'

export default function Header() {
  return (
  <div className="header">
            <div className="logo-container">
              <img
                className="logo"
                src={LOGO_URL}
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
        
        )
}
