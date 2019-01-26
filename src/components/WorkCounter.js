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
  },
  coloredDot: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
    borderRadius: 100,
    backgroundColor: '#d67e73'
  },
  greyDot: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
    borderRadius: 100,
    backgroundColor: '#d3d3d3'
  },
})
