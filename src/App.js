import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./css/App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Basket from "./components/Basket"
import ItemPage from "./components/ItemPage"
import { getHomeGame, getAllGames, getTags } from "./gamesStorage"

function App() {
  const [basket, setBasket] = useState([])
  const [basketClasses, setBasketClasses] = useState("basket")
  const [total, setTotal] = useState(0)

  const addItemToBasket = (item) => {
    const found = basket.filter((e) => e.title === item.title)
    if (found.length <= 0) {
      const newBasket = [...basket]
      newBasket.push({ ...item, amount: 1 })
      setBasket(newBasket)
    } else {
      const newBasket = [...basket]
      const index = newBasket.indexOf(found[0])
      newBasket[index].amount += 1
      setBasket(newBasket)
    }
  }

  const calculateTotal = () => {
    let newTotal = 0
    basket.forEach((item) => {
      newTotal += item.price * item.amount
    })
    newTotal = Math.round(newTotal * 100) / 100
    setTotal(newTotal)
  }

  useEffect(() => {
    calculateTotal()
  }, [basket])

  const removeItemFromBasket = (item) => {
    const found = basket.filter((e) => e.title === item.title)
    if (found.length > 0) {
      const newBasket = [...basket]
      const index = newBasket.indexOf(found[0])
      newBasket[index].amount -= 1
      if (newBasket[index].amount <= 0) {
        newBasket[index].splice(index, 1)
      }
      setBasket(newBasket)
    }
  }

  const openBasket = () => {
    setBasketClasses("basket active")
  }

  const closeBasket = () => {
    setBasketClasses("basket")
  }

  const sortKeys = (a, b) => {
    if (a.value < b.value) {
      return -1
    }
    if (a.value > b.value) {
      return 1
    }
    return 0
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar onBasketClick={openBasket} />
        <Basket
          basket={basket}
          classes={basketClasses}
          onClickX={closeBasket}
          total={total}
          addItem={addItemToBasket}
          removeItem={removeItemFromBasket}
        />
        <Routes>
          <Route path="/shop" element={<Home homeGame={getHomeGame()} />} />
          <Route
            path="/shop/shop"
            element={
              <Shop tags={getTags().sort(sortKeys)} games={getAllGames()} />
            }
          />
          <Route
            path="/shop/item/:id"
            element={
              <ItemPage
                handleAddClick={(game) => {
                  addItemToBasket(game)
                  calculateTotal()
                  openBasket()
                }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
