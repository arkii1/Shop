import uniqid from "uniqid"
import React from "react"
import { useParams } from "react-router-dom"
import { getGameFromTitle } from "../gamesStorage"
import Tag from "./Tag"
import "../css/ItemPage.css"

function ItemPage({ handleAddClick }) {
  const { id } = useParams()
  const game = getGameFromTitle(id)
  return (
    <div className="item-page">
      <div className="item-page-lhs">
        <h1>{game.title}</h1>
        <p>
          Ullamco adipisicing eiusmod occaecat exercitation aliqua et. Aliquip
          anim enim laboris dolore ex laboris eu ipsum eiusmod non eu voluptate.
          Amet id aliquip Lorem reprehenderit aute ad reprehenderit velit ex eu
          aute non Lorem non. Minim cupidatat nostrud dolor occaecat id
          incididunt nulla ullamco consectetur ut.{" "}
        </p>
        <div className="item-page-lhs-tags">
          {game.tags.map((tag) => (
            // horrible way to handle keys
            <Tag key={uniqid()} header={tag} />
          ))}
        </div>
      </div>
      <div className="item-page-rhs">
        <img alt={`${game.title} background`} src={game.imageUrl} />
      </div>
      <div className="item-page-basket">
        <h3>{`£ ${game.price}`}</h3>
        <button type="button" onClick={() => handleAddClick(game)}>
          ADD TO BASKET
        </button>
      </div>
    </div>
  )
}

export default ItemPage
