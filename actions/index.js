export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function addNewDeck({deckId, title, questions}) {
  return {type: ADD_DECK, deckId, title, questions}
}

export function addNewCard({deckId, question, answer}) {
  return {type: ADD_CARD, deckId, question, answer}
}
