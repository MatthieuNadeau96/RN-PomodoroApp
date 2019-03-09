import React, {Component} from 'react'
import { Text, View, } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation"

import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/SettingsScreen'



class Home extends React.Component {

  state = {
    time: {},
    counting: false,
    mode: 'WORK',
    completedWorkCount: 0,
    workTotalForBigBreak: 3,
    seconds: 5,
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
    const { mode, completedWorkCount, workTotalForBigBreak } = this.state
    const { workTimer, breakTimer, bigBreakTimer } = this.props
    console.log("counting down...")
    let seconds = this.state.seconds - 1
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds, // <-- here is the problem
    })
    console.log("time: " + seconds)
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
    const { counting, mode } = this.state
    const { workTimer, breakTimer, bigBreakTimer } = this.props

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
    const { mode } = this.state
    const { workTimer, breakTimer, bigBreakTimer } = this.props

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
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <HomeScreen
          workTimer={this.props.screenProps.workTimer}
          breakTimer={this.props.screenProps.breakTimer}
          bigBreakTimer={this.props.screenProps.bigBreakTimer}
          completedWorkCount={this.state.completedWorkCount}
          workTotalForBigBreak={this.state.workTotalForBigBreak}
          time={this.state.time}
          counting={this.state.counting}
          stopTimer={this.stopTimer}
          pauseTimer={this.pauseTimer}
          startTimer={this.startTimer}
          skipTimer={this.skipTimer}
        />
      </View>
    );
  }
}

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  }
  render() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID')
    const otherParam = this.props.navigation.getParam('otherParam', 'some default value')
    const working = this.props.navigation.getParam('working', 'this works!')

    return (
      <View>
        <SettingsScreen
          workDurationSetting = {this.props.workTimer}
          breakDurationSetting = {this.props.breakDuration}
          workSessionsBeforeBigBreakSetting = {this.props.workSessionsBeforeBigBreak}
        />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Settings: Settings,
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {

  state = {
    seconds: 5,
    workTimer: 5,
    breakTimer: 2,
    bigBreakTimer: 10,
  }

  render() {
    return (
      <AppContainer screenProps={{
        seconds: this.state.seconds,
        workTimer: this.state.workTimer,
        breakTimer: this.state.breakTimer,
        bigBreakTimer: this.state.bigBreakTimer,
        }}/>
    )
  }
}


// static navigationOptions = ({navigation}) => {
//   return {
//     headerTitle:'Timer',
//     headerRight: (
//       <HeaderButtons HeaderButtonComponent={FontAwesomeHeaderButton}>
//         <Item
//           title="settings"
//           iconName="cog"
//             onPress={() => this.props.navigation.navigate('Settings', {
//               itemID: 86,
//               otherParam: 'anything you want here',
//             })}
//           />
//       </HeaderButtons>
//     )
//   }
// }


// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Settings: SettingsScreen,
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       headerTintColor: '#444444',
//       headerStyle: {
//         backgroundColor: '#FFFFFF'
//       }
//     }
//   }
// )
