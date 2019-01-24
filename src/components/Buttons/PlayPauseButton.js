import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

export default class PlayPauseButton extends Component {
  render() {

    return (
      <LinearGradient colors={['#378E51', '#23753C', '#145D2A']} locations={[0,0.6,1]} style={styles.button}>
        <Text>{this.props.title}</Text>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 130,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
