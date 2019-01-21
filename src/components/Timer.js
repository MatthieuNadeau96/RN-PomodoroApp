import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Timer extends Component {

  state = {
    data: "25:00"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timerText}>{this.state.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 68,
    color: 'rgb(94, 94, 94)'
  }
});
