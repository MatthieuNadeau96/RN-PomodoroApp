import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


export default class PlayPauseButton extends Component {
  render() {

    let background = this.props.background
    let color = this.props.color

    return (
      <TouchableOpacity onPress={this.props.pressed} style={[ styles.button, {backgroundColor: background}]}>
        <Text style={{color}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  }
});
