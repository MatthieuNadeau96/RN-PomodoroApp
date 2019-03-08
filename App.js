import React, {Component} from 'react'
import { Text, View, } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './src/screens/HomeScreen'


class Homie extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <HomeScreen/>
      </View>
    );
  }
}


class SettingsScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Settings',
  }
  render() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID')
    const otherParam = this.props.navigation.getParam('otherParam', 'some default value')

    return (
      <View>
        <Text>Details</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>itemId: {JSON.stringify(otherParam)}</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Homie,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
  }
)


const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer/>
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
