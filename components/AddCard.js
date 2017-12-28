import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button
} from 'react-native'
import {addCardToDeck} from '../utils/api'

export default class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleQuestionChange = (question) => {
    this.setState({question: question})
  }

  handleAnswerChange = (answer) => {
    this.setState({answer: answer})
  }

  submit = () => {
    const deck = {}
    if (this.state.question !== '' && this.state.answer !== '') {
      deck['question'] = this.state.question
      deck['answer'] = this.state.answer
      addCardToDeck(this.props.navigation.state.params.title, deck)
      this
        .props
        .navigation
        .goBack()
    }
  }

  render() {
    const {question} = this.state.question
    const {answer} = this.state.answer
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleQuestionChange}
          value={question}
          placeholder='Question'/>
        <TextInput
          style={styles.input}
          onChangeText={this.handleAnswerChange}
          value={answer}
          placeholder='Answer'/>
        <Button onPress={this.submit} title="Submit" color="#841584"/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    height: 44,
    borderWidth: 1,
    borderColor: '#757575'
  }
})
