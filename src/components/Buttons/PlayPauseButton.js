import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';


export default class PlayPauseButton extends Component {
  render() {

    return (
      <TouchableOpacity onPress={this.props.pressed}>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.button}>
          <Text>{this.props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 130,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
