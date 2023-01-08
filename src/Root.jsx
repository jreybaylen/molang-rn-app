import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Greetings from './screens/Greetings'
import AtoZ from './screens/AtoZ'
import Updates from './screens/Update'
import LearnTL from './screens/LearnTL'
import GotIt from './screens/GotIt'
import { TabNavigator } from './routes/TabNavigator'

const Stack = createStackNavigator()

export default function Root () {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Main'
        >
          <Stack.Screen
            component={ AtoZ }
            name="What do I know?"
          />
          <Stack.Screen
            name="Greetings"
            component={ Greetings }
          />
          <Stack.Screen
            name="Updates"
            component={ Updates }
          />
          <Stack.Screen
            name="Main"
            component={ TabNavigator }
            options={
              { headerShown: false }
            } 
          />
          <Stack.Screen
            component={ LearnTL }
            name="LEARN THE LETTERS"
          />
          <Stack.Screen
            name="Greetings Quiz"
            component={ GotIt }
          />
        </Stack.Navigator>      
      </NavigationContainer>
    )
  }

