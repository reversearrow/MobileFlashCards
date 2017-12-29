import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button
} from 'react-native'
import {saveDeckTitle} from '../utils/api'
import {connect} from 'react-redux';
import {addNewDeck} from '../actions'

class AddDeck extends Component {
  state = {
    input: ''
  }

  handleTextChange = (input) => {
    this.setState({input: input})
  }

  submit = () => {
    if (this.state.input) {
      saveDeckTitle(this.state.input)
      const deckId = this.state.input
      const title = this.state.input
      const questions = []
      if (!this.props.decks.hasOwnProperty(deckId)) {
        this
          .props
          .dispatch(addNewDeck({deckId, title, questions}))
      }
      this
        .props
        .navigation
        .navigate('Deck', {
          deckId: deckId,
          title: title
        })
    }
  }

  render() {
    const {input} = this.state.input
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleTextChange}
          value={input}
          placeholder='Deck Title'/>
        <Button onPress={this.submit} title="Submit" color="#841584"/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  }
})

function mapStateToProps(decks) {
  return {decks: decks}
}
export default connect(mapStateToProps)(AddDeck)
