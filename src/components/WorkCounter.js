import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

export default class WorkCounter extends Component {
  render() {
    return (
      <View style={styles.workCounter}>
        <View style={ this.props.workCounter >= 1 ? styles.coloredDot : styles.greyDot }/>
        <View style={ this.props.workCounter >= 2 ? styles.coloredDot : styles.greyDot }/>
        <View style={ this.props.workCounter >= 3 ? styles.coloredDot : styles.greyDot }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  workCounter: {
    flexDirection: 'row',
    paddingVertical: 30,
  },
  coloredDot: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
    borderRadius: 100,
    backgroundColor: '#6EA95B'
  },
  greyDot: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
    borderRadius: 100,
    backgroundColor: '#c9c9c9'
  },
})
