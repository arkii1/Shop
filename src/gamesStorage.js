// Using static storage for now. Can convert to an API later.
import uniqid from "uniqid"

const games = [
  {
    title: "LEGO® Star Wars™: The Skywalker Saga",
    tags: ["Adventure", "Open World", "Action"],
    price: 39.99,
    imageUrl:
      "https://cdn.akamai.steamstatic.com/steam/apps/920210/ss_2b99c2ac40f518cc03f765f6b8fb6cb5e0569262.jpg?t=1643148138",
    key: uniqid(),
  },
  {
    title: "Elden Ring",
    tags: ["Relaxing", "RPG", "Action"],
    price: 49.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.jpg?t=1646817776",
    key: uniqid(),
  },
  {
    title: "Total War: WARHAMMER III",
    tags: ["Strategy", "Grand Strategy", "Turn-Based Strategy"],
    price: 49.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/ss_8c43a21dcb0af8114168c97159361dee76b39c32.jpg?t=1646396556",
    key: uniqid(),
  },
  {
    title: "Core Keeper",
    tags: ["Early Access", "Co-Op", "Pixel Graphics"],
    price: 10.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1621690/ss_8fdb403db359d63c818708b001b39780721d53b2.jpg?t=1647255726",
    key: uniqid(),
  },
  {
    title: "Monster Hunter Rise",
    tags: ["Action", "RPG", "Co-Op"],
    price: 49.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/ss_25686086b61ca88a859bc20d588682be92ab4d63.jpg?t=1647358506",
    key: uniqid(),
  },
  {
    title: "Resident Evil Village",
    tags: ["Survival Horror", "First-Person", "Singleplayer"],
    price: 49.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/ss_5cba45b96c65e0209c269e8d1d8865537927af33.jpg?t=1644282152",
    key: uniqid(),
  },
  {
    title: "Mass Effect™ Legendary Edition",
    tags: ["RPG", "Story Rich", "Action"],
    price: 54.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/ss_8994024759b1e6afb09a99381637c8b6fb4e4075.jpg?t=1643990135",
    key: uniqid(),
  },
  {
    title: "FIFA 22",
    tags: ["Soccer", "Sports", "Multiplayer"],
    price: 49.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1506830/ss_f526296665433ef5475972b690d51f9b6eebf991.jpg?t=1644868577",
    key: uniqid(),
  },
  {
    title: "Dying Light 2 Stay Human",
    tags: ["Open World", "Co-Op", "Parkour"],
    price: 49.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/534380/ss_0ecb51b7f46b67ea48d0615124d9e134d7098cf8.jpg?t=1647447262",
    key: uniqid(),
  },
  {
    title: "F1 2021",
    tags: ["Racing", "Sports", "Driving"],
    price: 49.99,
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1134570/ss_5cb6bd1a9759ccabd860b4a76eae32e6880b82bf.jpg?t=1647023236",
    key: uniqid(),
  },
]

const getHomeGame = () => games[0]

const getAllGames = () => games

const getTags = () => {
  const tagArray = []
  games.forEach((game) => {
    game.tags.forEach((tag) => {
      if (tagArray.filter((e) => e.value === tag).length === 0)
        tagArray.push({
          value: tag,
          key: uniqid(),
        })
    })
  })
  return tagArray
}

const getGameFromTitle = (title) => {
  try {
    const retGame = games.filter((game) => game.title === title)
    return retGame[0]
  } catch (err) {
    throw new Error(err)
  }
}

export { getHomeGame, getAllGames, getTags, getGameFromTitle }
