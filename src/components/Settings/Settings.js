import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Options from './Options'

export default class Settings extends Component {

  state = {
    value: 0
  }

  render() {
    return (
      <View style={styles.container}>
        <Options
          value={this.state.value}
          change={value => this.setState({ value })}
          />
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
