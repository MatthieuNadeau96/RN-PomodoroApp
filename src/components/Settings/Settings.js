import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Options from './Options'

export default class Settings extends Component {

  state = {
    workDuration: 0,
    breakDuration: 0,
    workSessionsBeforeBigBreak: 0,
  }

  render() {
    return (
      <View style={styles.container}>
        <Options
          optionTitle={"Work Duration"}
          min={0}
          max={10}
          value={this.state.workDuration}
          change={workDuration => this.setState({ workDuration })}
          />
        <Options
          optionTitle={"Break Duration"}
          min={0}
          max={10}
          value={this.state.breakDuration}
          change={breakDuration => this.setState({ breakDuration })}
          />
        <Options
          optionTitle={"Work Sessions Before Big Break"}
          min={2}
          max={4}
          value={this.state.workSessionsBeforeBigBreak}
          change={workSessionsBeforeBigBreak => this.setState({ workSessionsBeforeBigBreak })}
          />
      </View>
    );
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
});
