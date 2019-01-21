import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const Buttons = (props) => (
  <TouchableOpacity
    style={styles.button}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
)

export default Buttons;

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e46060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  }
});
