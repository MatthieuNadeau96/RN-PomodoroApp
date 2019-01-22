import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default class PlayPauseButton extends Component {
  render() {

    let background = this.props.background
    let color = this.props.color

    return (
      <TouchableOpacity onPress={this.props.pressed} style={[ styles.button, {backgroundColor: background}]}>
        <Text style={[ styles.buttonText, {color}]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
  },
  button: {
    width: 130,
    height: 130,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
