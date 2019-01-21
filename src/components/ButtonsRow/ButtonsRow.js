/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Buttons from './Buttons';

export default class ButtonsRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Buttons title="stop" color="#c4270c"/>
        <Buttons title="play" color="#c4270c"/>
        <Buttons title="skip" color="#c4270c"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});
