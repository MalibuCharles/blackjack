// creates a collection of 'games'
const getGamesCollection = () => {
    const db = firestore.getFirestore()
    return db.collection('games')
    }
    // this function is updating the game
    const saveGame = async (game, gameId) => {
    const col = getGameCollection()
    await col.doc(gameId.update(game)
    return game
    }
    // this function starts a new deck 
    const startNewGame = async () => {
    const col = getGamesCollection()
    const deck = getFreshDeck()
    deck.pop()
    const playerCards = [deck.pop(), deck.pop()]
    await col.add({
    playerCards,
    dealerCards,
    isDealerTurn: false,
    deck,
    })
    }
    const getGameById = async (id) => {
    const col = getGamesCollection()
    const game = await col.doc(id).get()
    
    return { id, ..game.data() }
    }