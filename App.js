import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import Timer from './src/components/Timer'
import PlayPauseButton from './src/components/Buttons/PlayPauseButton'
import StopSkipButtons from './src/components/Buttons/StopSkipButtons'


export default class App extends Component<Props> {

  state = {
    seconds: 1500,
    time: {},
    // counting: false,
    // mode: 'WORK',
    // progressBarCountdown: 100,
    // workCount: 0,
    // workCountTotal: 4
  }

  componentDidMount = () => {
    this.resetDisplay(this.state.seconds);
  }

  resetDisplay = (secs) => {
    let timeLeftVar = this.secondsToTime(secs);
    this.setState({ time: timeLeftVar });
  }

  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
  }

  startTimer = () => {
    this.myInterval = setInterval(this.countDown, 1000)
    // this.timerCountDown()
  }

  timerCountDown = () => {
    const { seconds } = this.state
    this.progress = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(this.progress);
      }
      this.setState( prevState => ({
        progressBarCountdown: prevState.progressBarCountdown - 1
      }))
    }, 1000 / (100 / seconds));

  }



  render() {
    const PlayIcon = (<Icon name="play" size={20} color="#ececec" />)
    const StopIcon = (<Icon name="stop" size={20} color="#ececec" />)
    const SkipIcon = (<Icon name="step-forward" size={20} color="#ececec" />)
    return (
      <View style={styles.container}>
        <Timer time={this.state.time}/>
        <View style={styles.buttonRow}>
          <StopSkipButtons
            title={SkipIcon}
            color='#eeeeee'
            background='#6a6a6a'
          />
          <PlayPauseButton
            title={PlayIcon}
            color='#eeeeee'
            background='#679462'
            onPress={this.startTimer}
          />
          <StopSkipButtons
            title={StopIcon}
            color='#eeeeee'
            background='#6a6a6a'
          />
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
    paddingHorizontal: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
})
