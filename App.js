import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import Timer from './src/components/Timer';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Timer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
