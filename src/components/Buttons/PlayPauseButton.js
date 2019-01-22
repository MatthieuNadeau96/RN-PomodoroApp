import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default class PlayPauseButton extends Component {
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
