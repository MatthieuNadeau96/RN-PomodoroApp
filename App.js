import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import Timer from './src/components/Timer'
import PlayPauseButton from './src/components/Buttons/PlayPauseButton'
import StopSkipButtons from './src/components/Buttons/StopSkipButtons'


export default class App extends Component<Props> {
  state = {
    timer: 1234567,
  }

  render() {
    const PlayIcon = (<Icon name="play" size={20} color="#ececec" />)
    const StopIcon = (<Icon name="stop" size={20} color="#ececec" />)
    const SkipIcon = (<Icon name="step-forward" size={20} color="#ececec" />)
    return (
      <View style={styles.container}>
        <Timer interval={this.state.timer}/>
        <View style={styles.buttonRow}>
          <StopSkipButtons title={SkipIcon} color='#eeeeee' background='#6a6a6a' />
          <PlayPauseButton title={PlayIcon} color='#eeeeee' background='#679462' />
          <StopSkipButtons title={StopIcon} color='#eeeeee' background='#6a6a6a' />
        </View>
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
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
