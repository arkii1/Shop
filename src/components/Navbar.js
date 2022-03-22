import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingBasket,
  faHome,
  faShop,
} from "@fortawesome/free-solid-svg-icons"
import "../css/Navbar.css"

function Navbar({ onBasketClick }) {
  return (
    <div className="navbar">
      <Link to="/shop">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/shop/shop">
        <FontAwesomeIcon icon={faShop} />
      </Link>
      <FontAwesomeIcon icon={faShoppingBasket} onClick={onBasketClick} />
    </div>
  )
}

export default Navbar
