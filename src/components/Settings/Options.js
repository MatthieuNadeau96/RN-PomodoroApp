import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Slider } from 'react-native-elements'

export default class Options extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Text>{this.props.optionTitle}</Text>
        <Slider
          value={this.props.value}
          onValueChange={this.props.change}
          step={1}
          minimumValue={this.props.min}
          maximumValue={this.props.max}
          thumbTintColor={'#5eb07a'}
          animationType={'spring'}
          />
        <Text>Value: {this.props.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
