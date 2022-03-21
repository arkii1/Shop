import React from "react"
import "../css/Basket.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import uniqid from "uniqid"

function Basket({ basket, classes, onClickX, total, addItem, removeItem }) {
  const checkoutAlert = () => {
    alert("No checkout functionality added yet!")
  }

  return (
    <div className={classes}>
      <h1>Your Shopping Basket</h1>
      <FontAwesomeIcon className="basket-x" icon={faXmark} onClick={onClickX} />
      {basket.map((item) => (
        // bad way to handle keys
        <div key={uniqid()} className="basket-item">
          <img src={item.imageUrl} alt={item.title} />
          <div className="basket-item-details">
            <h3>{item.title}</h3>
            <h4>{`£${item.price}`}</h4>
          </div>
          <div className="basket-item-amount">
            <button type="button" onClick={() => addItem(item)}>
              +
            </button>
            <button type="button" onClick={() => removeItem(item)}>
              -
            </button>
            <h4>{item.amount}</h4>
          </div>
        </div>
      ))}
      <h2>Total: {`£${total}`}</h2>
      <button onClick={checkoutAlert} className="basket-checkout" type="button">
        Checkout
      </button>
    </div>
  )
}

export default Basket
