import React, {Component} from 'react'
import { Text, View, } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation"

import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/SettingsScreen'

class Homie extends React.Component {
  state = {
    workTime: 10,
    seconds: 10,
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <HomeScreen
          seconds={this.state.seconds}
          workTimer={this.state.workTimer}
        />
      </View>
    );
  }
}

class Setty extends React.Component {
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
    Home: Homie,
    Settings: Setty,
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {

  render() {
    return (
      <AppContainer/>
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
