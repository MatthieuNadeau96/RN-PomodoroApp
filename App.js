import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'

import { createStackNavigator, createAppContainer } from "react-navigation"

import Timer from './src/components/Timer'
import PlayPauseButton from './src/components/Buttons/PlayPauseButton'
import StopSkipButtons from './src/components/Buttons/StopSkipButtons'
import SettingsButton from './src/components/Buttons/SettingsButton'
import WorkCounter from './src/components/WorkCounter'
import Settings from './src/components/Settings/Settings'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons'

class App extends Component<Props> {
  state = {
    seconds: 5,
    time: {},
    counting: false,
    mode: 'WORK',
    workTimer: 5,
    breakTimer: 2,
    bigBreakTimer: 10,
    completedWorkCount: 0,
    workTotalForBigBreak: 3
  }

  componentDidMount = () => {
    this.resetDisplay(this.state.seconds)
  }

  resetDisplay = (secs) => {
    let timeLeftVar = this.secondsToTime(secs)
    this.setState({ time: timeLeftVar })
  }

  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60))
    let divisor_for_minutes = secs % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)
    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)

    if (seconds < 10) {
      seconds = '0' + seconds
    }

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    }
    return obj
  }

  countDown = () => {
    const { workTimer, breakTimer, bigBreakTimer, mode, completedWorkCount, workTotalForBigBreak } = this.state
    let seconds = this.state.seconds - 1
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    })
    if (seconds === 0) {
      // alarm
      if (mode === 'WORK' && completedWorkCount === workTotalForBigBreak - 1) {
        this.resetDisplay(bigBreakTimer)
        this.setState({ mode: 'BIGBREAK', seconds: bigBreakTimer, completedWorkCount: completedWorkCount + 1})
      }
      else if (mode === 'WORK' && completedWorkCount !== workTotalForBigBreak) {
        this.setState({ mode: 'BREAK', seconds: breakTimer, completedWorkCount: completedWorkCount + 1 })
        this.resetDisplay(breakTimer)
      }
      if (mode === 'BREAK') {
        this.setState({ mode: 'WORK', seconds: workTimer, })
        this.resetDisplay(workTimer)
      }
      if (mode === 'BIGBREAK') {
        this.setState({ mode: 'WORK', seconds: workTimer, completedWorkCount: 0 })
        this.resetDisplay(workTimer)
      }
      this.pauseTimer()
    }
  }

  startTimer = () => {
    const { mode } = this.state
    this.setState({counting: true})
    this.myInterval = setInterval(this.countDown, 1000)
    this.timerCountDown()
  }

  pauseTimer = () => {
    clearInterval(this.myInterval)
    clearInterval(this.progress)
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
        clearInterval(this.progress)
      }
      this.setState( prevState => ({
        progressBarCountdown: prevState.progressBarCountdown - 1
      }))
    }, 1000 / (100 / seconds))
  }

  skipTimer = () => {
    const { mode, workTimer, breakTimer, bigBreakTimer } = this.state
    if (mode === 'WORK') {
      this.setState({ mode: 'BREAK', seconds: breakTimer })
      this.resetDisplay(breakTimer)
    }
    if (mode === 'BREAK') {
      this.setState({ mode: 'BIGBREAK', seconds: bigBreakTimer })
      this.resetDisplay(bigBreakTimer)
    }
    if (mode === 'BIGBREAK') {
      this.setState({ mode: 'WORK', seconds: workTimer })
      this.resetDisplay(workTimer)
    }

  }

  render() {
    const iconColor = '#fafafa' // <-- icon font color
    const PlayIcon = (<Icon name="play" size={40} color={iconColor} />)
    const PauseIcon = (<Icon name="pause" size={35} color={iconColor} />)
    const StopIcon = (<Icon name="stop" size={14} color={iconColor} />)
    const SkipIcon = (<Icon name="step-forward" size={14} color={iconColor} />)

    return (
      <LinearGradient colors={['#FFFFFF', '#FBFAFB', '#F9FAF7']} style={styles.container}>
        <View style={styles.settingsRow}>

        </View>
        <View style={styles.timerRow}>
          <WorkCounter
            style={styles.workCounter}
            workCounter={this.state.completedWorkCount}
            totalWorkCounter={this.state.workTotalForBigBreak}
            />
          <Timer time={this.state.time}/>
        </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity activeOpacity={.8} onPress={this.stopTimer}>
              <StopSkipButtons title={StopIcon} />
            </TouchableOpacity>
            {
              this.state.counting ?
              <TouchableOpacity activeOpacity={.8} onPress={this.pauseTimer}>
                <PlayPauseButton title={PauseIcon} />
              </TouchableOpacity> :
              <TouchableOpacity activeOpacity={.8} onPress={this.startTimer}>
                <PlayPauseButton title={PlayIcon} />
              </TouchableOpacity>
            }
            <TouchableOpacity activeOpacity={.8} onPress={this.skipTimer}>
              <StopSkipButtons title={SkipIcon} />
            </TouchableOpacity>
          </View>
      </LinearGradient>
    )
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle:'Timer',
      headerRight: (
        <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
          <Item title="settings" iconName="cog" onPress={() => navigation.navigate('Settings')}/>
        </HeaderButtons>
      )
    }
  }

}

const FontAwesomeHeaderButton = passMeFurther => (
  <HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={24} color={'#444444'} />
)

class SettingsScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Settings',
  }
  render() {
    return (
      <Settings/>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: App,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTintColor: '#444444',
      headerStyle: {
        backgroundColor: '#FFFFFF'
      }
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F6',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  workCounter: {
    flexDirection: 'row',
  },
  settingsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
  timerRow: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 90,
  },
  buttonRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default createAppContainer(AppNavigator)
