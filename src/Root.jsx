import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import SignLanguage from './screens/SignLanguage'
import Greetings from './screens/Greetings'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Lesson" component={SignLanguage}/>
    </Tab.Navigator>
  )
} 


export default function Root () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name="Greetings" component={Greetings}/>
          <Stack.Screen name="Main" component={TabNavigator} options={{headerShown:false}} />
        </Stack.Navigator>      
      </NavigationContainer>
    )
  }

