import "../css/Home.css"
import React from "react"
import { Link } from "react-router-dom"

function Home({ homeGame }) {
  return (
    <div className="home">
      <div>
        <h1>{homeGame.title}</h1>
        <Link to={`/item/${homeGame.title}`}>
          <button type="button" className="home-link">
            SHOP NOW
          </button>
        </Link>
      </div>
      <img
        src={homeGame.imageUrl}
        alt={`Current top game, ${homeGame.title}`}
      />
    </div>
  )
}

export default Home
