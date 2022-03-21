import "../css/Shop.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"

function Shop({ games, tags }) {
  const [filter, setFilter] = useState("All")
  const [classes, setClasses] = useState(
    Array(games.length).fill("shop-grid-item-link hide")
  )

  const handleOnFilterClick = (name) => {
    setFilter(name)
  }

  const handleOnImageEnter = (i) => {
    const newClasses = [...classes]
    newClasses[i] = "shop-grid-item-link active"
    setClasses(newClasses)
  }

  const handleOnImageExit = (i) => {
    const newClasses = [...classes]
    newClasses[i] = "shop-grid-item-link hide"
    setClasses(newClasses)
  }

  return (
    <div className="shop">
      <div className="shop-filter">
        <h2>Shop {filter}</h2>
        <button
          type="button"
          className="shop-filter-button"
          onClick={() => handleOnFilterClick("All")}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            type="button"
            className="shop-filter-button"
            onClick={() => handleOnFilterClick(tag.value)}
            key={tag.key}
          >
            {tag.value}
          </button>
        ))}
      </div>
      <div className="shop-grid">
        {games.map((game, index) =>
          game.tags.indexOf(filter) !== -1 || filter === "All" ? (
            <div className="shop-grid-item" key={game.key}>
              <div
                onMouseEnter={() => handleOnImageEnter(index)}
                onMouseLeave={() => handleOnImageExit(index)}
              >
                <img src={game.imageUrl} alt={`${game.title}`} />
                <Link to={`/item/${game.title}`}>
                  <button type="button" className={classes[index]}>
                    SHOP NOW
                  </button>
                </Link>
              </div>
              <div className="shop-grid-item-details">
                <h3>{game.title}</h3>
                <p>{`£${game.price}`}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export default Shop
