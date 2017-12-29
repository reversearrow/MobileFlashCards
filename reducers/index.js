import { ADD_DECK, ADD_CARD } from '../actions'

function decks (state={}, action){
  switch (action.type) {
    case 'ADD_NEW_DECK':
      return state
    default:
      return state
  }
}

export default decks
