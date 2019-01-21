import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import moment from 'moment'



export default class MyComponent extends Component {
  render() {
    const duration = moment.duration(this.props.interval)
    const centiseconds = Math.floor(duration.milliseconds() / 10)
    return (
      <Text style={styles.timer}>
        {duration.minutes()}:{duration.seconds()}.{centiseconds}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  timer: {
    color: '#6c6c6c',
    fontSize: 76,
    fontWeight: '200',
  },
});

// import React from 'react'
// import {
//   View,
//   Text,
//   StyleSheet,
// } from 'react-native'
//
//
//
// const Timer = (props) => (
// )
//
// export default Timer;
