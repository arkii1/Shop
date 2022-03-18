import {
  getHomeGame,
  getAllGames,
  getTags,
  getGameFromId,
} from "./gamesStorage"

describe("getHomeGame", () => {
  it("Should return Lego Star Wars", () => {
    const homeGame = getHomeGame()
    expect(homeGame.title).toBe("LEGO® Star Wars™: The Skywalker Saga")
    expect(homeGame.tags).toStrictEqual(["Adventure", "Open World", "Action"])
    expect(homeGame.price).toBe(39.99)
    expect(homeGame.imageUrl).toBe(
      "https://cdn.akamai.steamstatic.com/steam/apps/920210/ss_2b99c2ac40f518cc03f765f6b8fb6cb5e0569262.jpg?t=1643148138"
    )
  })
})

describe("getGames", () => {
  it("Should return correct games", () => {
    const games = getAllGames()
    expect(games[1].title).toBe("Elden Ring")
    expect(games[4].title).toBe("Monster Hunter Rise")
    expect(games[7].title).toBe("FIFA 22")
    expect(games[9].title).toBe("F1 2021")
  })
})

describe("getTags", () => {
  it("Should return correct tags", () => {
    const tags = getTags()
    const actualTags = [
      "Adventure",
      "Open World",
      "Action",
      "Relaxing",
      "RPG",
      "Strategy",
      "Grand Strategy",
      "Turn-Based Strategy",
      "Early Access",
      "Co-Op",
      "Pixel Graphics",
      "Survival Horror",
      "First-Person",
      "Singleplayer",
      "Story Rich",
      "Soccer",
      "Sports",
      "Multiplayer",
      "Parkour",
      "Racing",
      "Driving",
    ]
    expect(tags.length).toBe(actualTags.length)
    tags.forEach((tag) => {
      const value = actualTags.filter((e) => e.value === tag)
      expect(value.title).toBe(tag.title)
    })
  })
})

describe("getGameFrom Id", () => {
  it("returns expected game", () => {
    const gameToTest = getHomeGame()
    expect(getGameFromId(gameToTest.key).title).toBe(gameToTest.title)
  })
})
