import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import SignLanguage from './screens/SignLanguage'

const Tab = createBottomTabNavigator();

export default function Root () {
    return (
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Lesson" component={SignLanguage}/>
          </Tab.Navigator>
      </NavigationContainer>
    )
  }

