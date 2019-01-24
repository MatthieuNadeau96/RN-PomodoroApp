import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import Timer from './src/components/Timer'
import PlayPauseButton from './src/components/Buttons/PlayPauseButton'
import StopSkipButtons from './src/components/Buttons/StopSkipButtons'


export default class App extends Component<Props> {

  state = {
    seconds: 5,
    time: {},
    counting: false,
    mode: 'WORK',
    workTimer: 5,
    breakTimer: 2,
    bigBreakTimer: 10,
    completedWorkCount: 0,
    workCountTotal: 2
  }

  componentDidMount = () => {
    this.resetDisplay(this.state.seconds);
  }

  resetDisplay = (secs) => {
    let timeLeftVar = this.secondsToTime(secs);
    this.setState({ time: timeLeftVar });
    // alert('mode: ' + this.state.mode + '\ncompletedWork: ' + this.state.completedWorkCount);
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
    const { workTimer, breakTimer, bigBreakTimer, mode, completedWorkCount, workCountTotal } = this.state
    let seconds = this.state.seconds - 1
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    })
    if (seconds === 0) {
      // alarm
      if (mode === 'WORK' && completedWorkCount === workCountTotal) {
        this.setState({ mode: 'BIGBREAK', seconds: bigBreakTimer })
        this.resetDisplay(bigBreakTimer);
      }
      if (mode === 'WORK' && completedWorkCount < workCountTotal) {
        this.setState({ mode: 'BREAK', seconds: breakTimer, completedWorkCount: completedWorkCount + 1 })
        this.resetDisplay(breakTimer);
      }
      if (mode === 'BREAK') {
        this.setState({ mode: 'WORK', seconds: workTimer, })
        this.resetDisplay(workTimer);
      }
      if (mode === 'BIGBREAK') {
        this.setState({ mode: 'WORK', seconds: workTimer, completedWorkCount: 0 })
        this.resetDisplay(workTimer);
      }

      this.pauseTimer()
    }
  }

  startTimer = () => {
    const { mode } = this.state

    this.setState({counting: true})


    this.myInterval = setInterval(this.countDown, 1000);
    this.timerCountDown()
  }

  pauseTimer = () => {
    clearInterval(this.myInterval);
    clearInterval(this.progress);
    this.setState({ counting: false })
  }

  stopTimer = () => {
    const { workTimer, breakTimer, bigBreakTimer, counting, mode } = this.state
    this.pauseTimer()
    if(mode === 'WORK') {
    this.resetDisplay(workTimer)
    this.setState({seconds: workTimer})
    }
    if (mode === 'BREAK') {
    this.resetDisplay(breakTimer)
    this.setState({seconds: breakTimer})
    }
    else if (mode === 'BIGBREAK') {
    this.resetDisplay(bigBreakTimer)
    this.setState({seconds: bigBreakTimer})
    }
    this.setState({progressBarCountdown: 100})
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

  skipTimer = () => {
    const { mode, workTimer, breakTimer, bigBreakTimer } = this.state
    if (mode === 'WORK') {
      this.setState({ mode: 'BREAK', seconds: breakTimer })
      this.resetDisplay(breakTimer);
    }
    if (mode === 'BREAK') {
      this.setState({ mode: 'BIGBREAK', seconds: bigBreakTimer })
      this.resetDisplay(bigBreakTimer);
    }
    if (mode === 'BIGBREAK') {
      this.setState({ mode: 'WORK', seconds: workTimer })
      this.resetDisplay(workTimer);
    }

  }



  render() {
    const iconColor = '#eea13a' // <-- icon font color
    
    const PlayIcon = (<Icon name="play" size={40} color={iconColor} />)
    const PauseIcon = (<Icon name="pause" size={35} color={iconColor} />)
    const StopIcon = (<Icon name="stop" size={14} color={iconColor} />)
    const SkipIcon = (<Icon name="step-forward" size={14} color={iconColor} />)
    return (
      <View style={styles.container}>
        <Timer time={this.state.time}/>
        <View style={styles.buttonRow}>
          <StopSkipButtons
            pressed={this.stopTimer}
            title={StopIcon}
          />
          {  // play or pause logic
            this.state.counting ?
            // pause button
            <PlayPauseButton
              pressed={this.pauseTimer}
              title={PauseIcon}
              /> :
              // play button
              <PlayPauseButton
                pressed={this.startTimer}
                title={PlayIcon}
                />
            }
          <StopSkipButtons
            pressed={this.skipTimer}
            title={SkipIcon}
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
  }
})
