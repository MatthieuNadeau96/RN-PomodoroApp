import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import Options from '../components/Settings/Options'

export default class SettingsScreen extends Component {

  state = {
    workDuration: this.props.workTimer,
    breakDuration: this.props.breakTimer,
    bigBreakDuration: this.props.bigBreakTimer,
  }

  render() {

    return (
      <LinearGradient colors={['#FFFFFF', '#FBFAFB', '#F9FAF7']} style={styles.container}>
        <Options
          switchChanged={this.props.switchChanged}
          darkThemeSwitch={this.props.darkThemeSwitch}
          />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F8F6',
    paddingTop: 15,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  }
})
