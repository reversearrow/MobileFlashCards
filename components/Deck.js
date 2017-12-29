import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {fetchDeck} from '../utils/api'

export default class Deck extends Component {
  state = {
    title: '',
    totalDecks: 0
  }

  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params
    return {title: title}
  }
  /*
  componentDidMount() {
    fetchDeck(this.props.navigation.state.params.deckId).then((value) => {
      this.setState({title: value["title"], totalDecks: value["questions"].length})
    })
  }*/

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {this.state.title}</Text>
        <Text style={styles.cards}>
          {this.state.totalDecks}
          cards</Text>
        <View style={styles.addCard}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddCard', {title: this.state.title})}>
            <Text>
              Add Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.startQuiz}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Quiz', {deckId: this.props.navigation.state.params.deckId})}>
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
