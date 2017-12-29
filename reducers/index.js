function decks(state = {}, action) {
  switch (action.type) {
    case 'ADD_DECK':
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          'title': action.title,
          'questions': action.questions
        }
      }
    case 'ADD_CARD':
      const {question, answer} = action
      console.log(state)return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          'questions': [
            ...state[action.deckId]["questions"], {
              question,
              answer
            }
          ]
        }
      }
    default:
      return state
  }
}

export default decks
