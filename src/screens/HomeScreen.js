import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'

import { createStackNavigator, createAppContainer } from "react-navigation"

import Timer from '../components/Timer'
import PlayPauseButton from '../components/Buttons/PlayPauseButton'
import StopSkipButtons from '../components/Buttons/StopSkipButtons'
import SettingsButton from '../components/Buttons/SettingsButton'
import WorkCounter from '../components/WorkCounter'
import Settings from '../components/Settings/Settings'

import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons'

export default class HomeScreen extends Component {

  render() {
    const iconColor = '#fafafa' // <-- icon font color
    const PlayIcon = (<Icon name="play" size={40} color={iconColor} />)
    const PauseIcon = (<Icon name="pause" size={35} color={iconColor} />)
    const StopIcon = (<Icon name="stop" size={14} color={iconColor} />)
    const SkipIcon = (<Icon name="step-forward" size={14} color={iconColor} />)
    return (
      <LinearGradient
        colors={this.props.darkThemeSwitch ? ['#5e5e5e', '#4d4c4c', '#373737'] : ['#FFFFFF', '#FBFAFB', '#F9FAF7']}
        style={styles.container}>
        <View style={styles.timerRow}>
          <WorkCounter
            style={styles.workCounter}
            workCounter={this.props.completedWorkCount}
            totalWorkCounter={this.props.workTotalForBigBreak}
          />
          <Timer
            darkThemeSwitch={this.props.darkThemeSwitch}
            time={this.props.time}
          />
        </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity activeOpacity={.8} onPress={this.props.stopTimer}>
              <StopSkipButtons title={StopIcon} />
            </TouchableOpacity>
            {
              this.props.counting ?
              <TouchableOpacity activeOpacity={.8} onPress={this.props.pauseTimer}>
                <PlayPauseButton title={PauseIcon} />
              </TouchableOpacity> :
              <TouchableOpacity activeOpacity={.8} onPress={this.props.startTimer}>
                <PlayPauseButton title={PlayIcon} />
              </TouchableOpacity>
            }
            <TouchableOpacity activeOpacity={.8} onPress={this.props.skipTimer}>
              <StopSkipButtons title={SkipIcon} />
            </TouchableOpacity>
          </View>
      </LinearGradient>
    );
  }
}

const FontAwesomeHeaderButton = passMeFurther => (
  <HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={24} color={'#444444'} />
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
  },
  buttonRow: {
    paddingVertical: 30,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
