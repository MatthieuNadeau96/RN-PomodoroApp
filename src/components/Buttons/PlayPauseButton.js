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
      <LinearGradient colors={['#6EA95B', '#5d8f4c', '#4f7a40']} locations={[0,0.6,1]} style={styles.button}>
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
