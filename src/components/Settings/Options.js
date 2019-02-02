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
      <View style={styles.container}>
        <View style={{ alignItems: 'stretch', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text>{this.props.optionTitle}: </Text>
            <Text style={{ paddingLeft: 5, fontWeight: 'bold' }}>{this.props.value}</Text>
          </View>
          <Slider
            value={this.props.value}
            onValueChange={this.props.change}
            step={1}
            minimumValue={this.props.min}
            maximumValue={this.props.max}
            thumbTintColor={'#5eb07a'}
            animationType={'spring'}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
});
