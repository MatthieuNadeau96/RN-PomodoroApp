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
      <LinearGradient colors={['#114411', '#0B2E0B', '#071f07']} locations={[0,0.6,1]} style={styles.button}>
        <Text>{this.props.title}</Text>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  }
})
