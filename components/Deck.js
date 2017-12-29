import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {fetchDeck} from '../utils/api'
import {connect} from 'react-redux';

class Deck extends Component {
  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params
    return {title: title}
  }

  render() {
    const deckId = this.props.navigation.state.params.deckId
    const title = this.props.decks[deckId]['title']
    const totalDecks = this.props.decks[deckId]['questions'].length
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {title}</Text>
        <Text style={styles.cards}>
          {`${totalDecks} cards`}
        </Text>
        <View style={styles.addCard}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddCard', {deckId: deckId})}>
            <Text>
              Add Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.startQuiz}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Quiz', {deckId: deckId})}>
            <Text style={{
              color: 'white'
            }}>
              Start Quiz
            </Text>
          </TouchableOpacity>
        </View>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Home"/>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 24
  },
  cards: {
    fontSize: 19
  },
  addCard: {
    borderRadius: 5,
    borderWidth: 1.0,
    marginTop: 15,
    padding: 10
  },
  startQuiz: {
    borderRadius: 5,
    borderWidth: 1.0,
    marginTop: 15,
    padding: 10,
    backgroundColor: 'black'
  }
})

function mapStateToProps(decks) {
  return {decks: decks}
}

export default connect(mapStateToProps)(Deck)
