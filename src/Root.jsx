import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Alphabet from './screens/home/Alphabet'
import GreetingsMain from './screens/home/GreetingsMain'
import Leaderboard from './screens/home/Leaderboard'
import Updates from './screens/home/Update'
import Greetings from './screens/greetingsMain/Greetings'
import School from './screens/greetingsMain/School'
import Travel from './screens/greetingsMain/Travel'
import BuySome from './screens/greetingsMain/BuySome'
import GreetingsContent from './screens/content/GreetingsMainContent'
import AlphabetContent from './screens/content/AlphabetContent'

const Stack = createStackNavigator()

export default function Root () {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Main'
        >
          <Stack.Screen 
            name="Main" 
            component={ Home } 
            options={ { headerShown:false } } 
          />
          <Stack.Screen 
            name="Alphabets" 
            component={ Alphabet }
          />
          <Stack.Screen 
            name="Greetings And Common Phrases"
            component={ GreetingsMain }
          />
          <Stack.Screen 
            name="Updates" 
            component={ Updates }
          />
          <Stack.Screen 
            name="leaderboard" 
            component={ Leaderboard }
          />
          <Stack.Screen 
            name="Greetings" 
            component={ Greetings }
            options={ { headerShown:false } } 
          />
          <Stack.Screen 
            name="School" 
            component={ School }
            options={ { headerShown:false } } 
          />
          <Stack.Screen 
            name="Travel" 
            component={ Travel }
            options={ { headerShown:false } } 
          />
          <Stack.Screen 
            name="Buying Something" 
            component={ BuySome }
            options={ { headerShown:false } } 
          />
          <Stack.Screen 
            name="Greetings Content" 
            component={ GreetingsContent }
            options={ { headerShown:false } } 
          />
          <Stack.Screen 
            name="AlphabetContent" 
            component={ AlphabetContent }
            options={ { headerShown:false } } 
          />
        </Stack.Navigator>      
      </NavigationContainer>
    )
  }