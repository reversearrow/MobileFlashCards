import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import AddDeck from './components/AddDeck'
import Decks from './components/Decks'
import {initAsyncStore} from './utils/api'
import Deck from './components/Deck.js'
import AddCard from './components/AddCard.js'
import Quiz from './components/Quiz.js'
import {setLocalNotification} from './utils/notifications'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import decks from './reducers'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: AddDeck
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerLeft: null
    }
  },
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add Card"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(decks)}>
        <View style={{
          flex: 1
        }}>
          < MainNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
