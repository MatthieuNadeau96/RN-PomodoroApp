import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

import Timer from './src/components/Timer'
import RoundButton from './src/components/RoundButton'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component<Props> {
  state = {
    timer: 1234567,
  }

  render() {
    const myIcon = (<Icon name="play" size={20} color="#ececec" />)
    return (
      <View style={styles.container}>
        <Timer interval={this.state.timer}/>
        <RoundButton title={myIcon} color='#eeeeee' background='#679462' />
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
  }
})
