import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Slider,
} from 'react-native';

export default class Options extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'stretch', justifyContent: 'center' }}>
          <View style={{flexDirection: 'row', fontSize: 60 }}>
            <Text style={styles.text}>{this.props.optionTitle}: </Text>
            <Text style={[styles.text, { paddingLeft: 5, fontWeight: 'bold', color: '#6EA95B' }]}>{this.props.value}</Text>
          </View>
          <Slider
            value={this.props.value}
            onValueChange={this.props.change}
            step={1}
            minimumValue={this.props.min}
            maximumValue={this.props.max}
            thumbTintColor={'#6EA95B'}
            trackStyle={styles.trackStyle}
            minimumTrackTintColor={'#608f51'}
            maximumTrackTintColor={'#c9c9c9'}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
  },
});
