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
      <View style={[ styles.button, {backgroundColor: background}]}>
        <Text style={[ styles.buttonText, {color}]}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
  }
});
