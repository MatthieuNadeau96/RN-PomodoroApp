import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import moment from 'moment'


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
    color: '#6c6c6c',
    fontSize: 100,
    fontWeight: '900',
  },
})
