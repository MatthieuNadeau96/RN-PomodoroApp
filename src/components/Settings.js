import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Work Duration</Text>
        <Text>Break Duration</Text>
        <Text>Sessions before Big Break</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F6',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
});
