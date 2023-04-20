import './Navbar.css'
import React from 'react'

export default function Navbar() {

  return (
    <nav id="navbar">
    <a href="#intro-section">
      <img src="bookstore-react/img/logo1.png" alt="spAts" className="logo"
    /></a>
    <ul className="nav-menu">
      <li className="item">
        <a href="#Best-selling-books">Best Selling Books</a>
      </li>
      <li classNameName="item">
        <a href="#Our-Recommendations">Our Recommendations</a>
      </li>
      <li className="item"><a href="#Review-Section">Reviews Section</a></li>
      <li className="item"><a href="#Contact-us">Contact Us</a></li>
      {/* <li className="item"><a href="#login">Login<b>/</b>SignUp</a></li> */}
    </ul>
    <div className="hamburger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </nav>
  )
}

