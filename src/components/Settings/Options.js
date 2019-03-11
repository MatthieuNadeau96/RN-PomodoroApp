import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Slider,
  Switch,
} from 'react-native';

export default class Options extends Component {

  state = {
    value: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dark Theme: </Text>
        <Switch
          onValueChange={this.props.switchChanged}
          value={this.props.darkThemeSwitch}
          />
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
