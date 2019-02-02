import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Slider } from 'react-native-elements'

export default class Settings extends Component {

  state = {
    value: 0
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
          <Text>Work Duration</Text>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            step={1}
            minimumValue={0}
            maximumValue={10}
            thumbTintColor={'#5eb07a'}
            animationType={'spring'}
            />
          <Text>Value: {this.state.value}</Text>
        </View>
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
