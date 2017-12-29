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
import {connect} from 'react-redux'
import {addNewDeck} from '../actions'

class Decks extends Component {

  componentDidMount() {
    fetchAllDecks().then((decks) => {
      if(decks)
      {Object
        .keys(decks)
        .map((key) => this.props.dispatch(addNewDeck({deckId: key, title: decks[key]['title'], questions: decks[key]['questions']
        })))}
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.decks !== null && this.props.decks !== {}
          ? Object
            .keys(this.props.decks)
            .sort()
            .map((deck) => <View key={this.props.decks[deck]['title']} style={styles.deck}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Deck', {
                deckId: this.props.decks[deck]['title'],
                title: this.props.decks[deck]['title']
              })}>
                <Text style={styles.title}>
                  {this.props.decks[deck]['title']}
                </Text>
                <Text style={styles.cards}>
                  {`${this.props.decks[deck]['questions'].length} cards`}
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

function mapStateToProps(decks) {
  return {decks: decks}
}

export default connect(mapStateToProps)(Decks)
