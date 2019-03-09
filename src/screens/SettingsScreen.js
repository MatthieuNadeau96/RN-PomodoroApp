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
    workDuration: 0,
    breakDuration: 0,
    bigBreakDuration: 0,
  }


  render() {
    return (
      <LinearGradient colors={['#FFFFFF', '#FBFAFB', '#F9FAF7']} style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>As of now these sliders don't do anything</Text>
        <Text>{this.props.workTimer}</Text>
        <Options
          optionTitle={"Work Duration"}
          min={5}
          max={60}
          value={0}
          change={ (workDuration) => this.setState({ workDuration })}
          />
        <Options
          optionTitle={"Break Duration"}
          min={1}
          max={25}
          value={this.state.breakDuration}
          change={ breakDuration => this.setState({ breakDuration })}
          />
        <Options
          optionTitle={"Work Sessions Before Big Break"}
          min={2}
          max={6}
          value={this.state.bigBreakDuration}
          change={ bigBreakDuration => this.setState({ bigBreakDuration })}
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
