import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { Fonts } from '../utils/Fonts'

export default class MyComponent extends Component {
  render() {
    return (
      <Text style={styles.timer}>
        {this.props.time.m}:{this.props.time.s}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  timer: {
    color: '#444444',
    fontSize: 120,
    fontFamily: Fonts.RobotoCondensed
  },
})
