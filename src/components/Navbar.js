import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass,
  faShoppingBasket,
  faHome,
  faShop,
} from "@fortawesome/free-solid-svg-icons"
import "../css/Navbar.css"

function Navbar({ onBasketClick }) {
  return (
    <div className="navbar">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/shop">
        <FontAwesomeIcon icon={faShop} />
      </Link>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faShoppingBasket} onClick={onBasketClick} />
    </div>
  )
}

export default Navbar
