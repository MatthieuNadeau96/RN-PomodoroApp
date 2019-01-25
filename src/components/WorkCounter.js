import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class WorkCounter extends Component {
  render() {

    return (
      <View>
        <Text>{this.props.workCounter}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
