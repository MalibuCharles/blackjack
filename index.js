const admin = require('firebase-admin')
const firestore = require('firebase-admin/firestore')
const {cert} = require('firebase-admin/app')
const db = firestore.getFirestore()
const creds = require('./credentials.json')
admin.initializeApp({credential: cert(creds)})


const run = async () => {
    const gameId = await startNewGame()
    await hitOrStay(gameId, 'stay')
    await completeDealerTurn(gameId)
    const game = await getGameById(gameId)
    console.log(game)
    }