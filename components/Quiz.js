import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Button
} from 'react-native'
import {fetchDeck} from '../utils/api'
import {clearLocalNotification, setLocalNotification} from '../utils/notifications'
import {connect} from 'react-redux'

class Quiz extends Component {
  state = {
    index: 0,
    displayResults: false,
    displayQuestion: true,
    correct: 0
  }

  correct = () => {
    let currentCorrect = this.state.correct
    this.setState({
      correct: currentCorrect + 1
    })
    this.nextDeck()
  }

  nextDeck = () => {
    let currentIndex = this.state.index
    const deckId = this.props.navigation.state.params.deckId
    if (this.props.decks[deckId]["questions"].length - 1 > this.state.index) {
      this.setState({
        index: currentIndex + 1
      })
    } else {
      this.setState({displayResults: true})
    }
  }

  displayAnswer = () => {
    this.setState({displayQuestion: false})
  }

  displayQuestion = () => {
    this.setState({displayQuestion: true})
  }

  restart = () => {
    this.setState({index: 0, displayResults: false, displayQuestion: true, correct: 0})
  }

  render() {
    clearLocalNotification().then(setLocalNotification)
    const deckId = this.props.navigation.state.params.deckId
    const questions = this.props.decks[deckId]["questions"]
    const totalDecks = questions.length
    return (
      <View style={styles.container}>
        {totalDecks > 0
          ? <View>
              {!this.state.displayResults
                ? <View>
                    <Text>{this.state.index + 1}/{questions.length}</Text>
                    <View>
                      {this.state.displayQuestion
                        ? <View>
                            <Text>
                              {questions[this.state.index]["question"]}</Text>
                            <Button onPress={this.displayAnswer} title="Answer"/>
                          </View>
                        : <View>
                          <Text>
                            {questions[this.state.index]["answer"]}
                          </Text>
                          <Button onPress={this.displayQuestion} title="Question"/>
                        </View>
                        }
                      <Button style={{}} onPress={this.correct} title="Correct"/>
                      <Button onPress={this.nextDeck} title="Incorrect"/>
                    </View>
                  </View>
                : <View style={styles.container}>
                  <Text style={{
                    fontSize: 18
                  }}>
                    Result: {this.state.correct}/{totalDecks}</Text>
                  <Button onPress={this.restart} title="Restart Quiz"/>
                  <Button onPress={() => this.props.navigation.goBack()} title="Back to Deck"/>
                  <Button onPress={() => this.props.navigation.navigate('Home')} title="Home"/>
                </View>
              }
            </View>
          : <View>
            <Text>
              No Decks
            </Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function mapStateToProps(decks) {
  return {decks: decks}
}

export default connect(mapStateToProps)(Quiz)
