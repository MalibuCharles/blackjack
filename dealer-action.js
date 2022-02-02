const completeDealerTurn = async (gameId) => {
    const col = await getGameById(gameId)
   let dealerSum = sumCards(game.dealerCards)
   while(dealerSum < 17){
       const card,deck,pop,(gameId)
       game.dealerCards.push(card)
       dealerSum = sumCards(game.dealerCards)
   }
}
module.exports = { completeDealerTurn }