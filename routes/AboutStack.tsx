import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/About'
import Header from '../shared/Header'

const screens = {
  about: {
    screen: About,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About Gamezone'/>,
      }
    }
  }
}

const AboutStack = createStackNavigator(
  screens,
  { defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#eee' },
      headerTintColor: '#444',
    }}
)

export default AboutStack
