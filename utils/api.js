import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'DECKS'

export function initAsyncStore(){
  AsyncStorage.getItem(DECK_STORAGE_KEY).then((value) => {
    if(!value){
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({}))
  }
  })
}

export function saveDeckTitle (id) {
  AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify({
    [id] : {
      'title': id,
      'questions': []
    }
  }) )
}

export function fetchAllDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((value) => {
    return (JSON.parse(value))
  })
}


export function addCardToDeck (title,card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((value) => {
    const data = JSON.parse(value)
    data[title]["questions"].push(card)
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
  })
}

export function fetchDeck (id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((value) => {
    return (JSON.parse(value)[id])
  })
}
