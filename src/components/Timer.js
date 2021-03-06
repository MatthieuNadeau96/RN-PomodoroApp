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
      <Text style={this.props.darkThemeSwitch ? styles.darkTimer : styles.timer}>
        {this.props.time.m}:{this.props.time.s}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  timer: {
    color: '#444444',
    fontSize: 120,
    paddingVertical: 60,
    fontFamily: Fonts.RobotoCondensed
  },
  darkTimer: {
    color: '#f1f1f1',
    fontSize: 120,
    paddingVertical: 60,
    fontFamily: Fonts.RobotoCondensed
  }
})
