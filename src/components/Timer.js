import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import moment from 'moment'

const Timer = (props) => (
  <View>
    <Text style={styles.timer}>{props.interval}</Text>
  </View>
)

export default Timer;

const styles = StyleSheet.create({
  timer: {
    color: '#6c6c6c',
    fontSize: 76,
    fontWeight: '200',
  },
})
