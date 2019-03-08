import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Options from '../components/Settings/Options'

export default class SettingsScreen extends Component {

  // state = {
  //   workDuration: 25,
  //   breakDuration: 5,
  //   workSessionsBeforeBigBreak: 3,
  // }


  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>As of now these sliders don't do anything</Text>
        <Options
          optionTitle={"Work Duration"}
          min={5}
          max={60}
          value={this.props.workDurationSetting}
          />
        <Options
          optionTitle={"Break Duration"}
          min={1}
          max={25}
          value={this.props.breakDurationSetting}
          />
        <Options
          optionTitle={"Work Sessions Before Big Break"}
          min={2}
          max={6}
          value={this.props.workSessionsBeforeBigBreakSetting}
          />
      </View>
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
