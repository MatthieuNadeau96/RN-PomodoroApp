import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import Timer from './src/components/Timer'
import RoundButton from './src/components/RoundButton'

export default class App extends Component<Props> {
  state = {
    timer: 1234567,
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer interval={this.state.timer}/>
        <RoundButton title='Start' color='#eeeeee' background='#bbdaac' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    paddingTop: 130,
  }
})
