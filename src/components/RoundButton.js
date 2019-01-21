import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class RoundButton extends Component {
  render() {
    let background = this.props.background
    let color = this.props.color
    return (
      <View style={{backgroundColor: background}}>
        <Text style={{color}}>{this.props.title}</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//
// });
