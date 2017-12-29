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
import {addNewDeck} from '../actions/'

class AddDeck extends Component {
  state = {
    input: ''
  }

  handleTextChange = (input) => {
    this.setState({input: input})
  }

  submit = () => {
    if (this.state.input) {
      this.props.addNewDeck(this.state.input)
      //saveDeckTitle(this.state.input)
      this
        .props
        .navigation
        .navigate('Deck', {
          deckId: this.state.input,
          title: this.state.input
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

const mapDispatchToProps = (dispatch) => {
  return {
    addNewDeck: (data) => dispatch(addNewDeck(data)),
  }
}

export default connect(mapDispatchToProps)(RootView)
