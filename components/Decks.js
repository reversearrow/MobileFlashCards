import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import {fetchAllDecks} from '../utils/api'

export default class Decks extends Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    fetchAllDecks().then((decks) => {
      this.setState({decks})
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.decks !== null
          ? Object
            .keys(this.state.decks)
            .sort()
            .map((deck) => <View key={this.state.decks[deck]['title']} style={styles.deck}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Deck', {
                deckId: this.state.decks[deck]['title'],
                title: this.state.decks[deck]['title']
              })}>
                <Text style={styles.title}>
                  {this.state.decks[deck]['title']}
                </Text>
                <Text style={styles.cards}>
                  {`${this.state.decks[deck]['questions'].length} cards`}
                </Text>
              </TouchableOpacity>
            </View>)
          : <Text></Text>
}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deck: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5
  },
  title: {
    fontSize: 24
  },
  cards: {
    fontSize: 18
  }
})
