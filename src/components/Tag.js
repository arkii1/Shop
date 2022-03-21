import React from "react"
import "../css/Tag.css"

function Tag({ header }) {
  return (
    <div className="tag">
      <h5>{header}</h5>
    </div>
  )
}

export default Tag
