export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_CARD = 'ADD_CARD'


export const addNewDeck = (deck) => {
  console.log(deck)
  return{
    type: ADD_NEW_DECK,
    deck
  }
}

export const addCard = (card) => {
  return{
    type: ADD_CARD,
    deck
  }
}
