import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import SignLanguage from '../screens/SignLanguage'

const Tab = createBottomTabNavigator()

export function TabNavigator () {
    return (
      <Tab.Navigator
        screenOptions={
          { tabBarShowLabel: false }
        }
      >
        <Tab.Screen 
          name="Home" 
          component={ Home } 
          options={
            { headerShown: false }
          }
        />
        <Tab.Screen
          name="Lesson"
          component={ SignLanguage }
        />
      </Tab.Navigator>
    )
  }