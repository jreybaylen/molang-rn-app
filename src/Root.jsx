import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/themed';

import Home from './screens/Home'
import SignLanguage from './screens/SignLanguage'
import Greetings from './screens/Greetings'
import AtoZ from './screens/AtoZ'
import Updates from './screens/Update'
import LearnTL from './screens/LearnTL'
import GotIt from './screens/GotIt'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown:false,
        //   tabBarIcon: ({ color }) => { 
        //         <Icon
        // name={"sc-telegram"}
        // type={"evilicon"}
        // color={'black'}/>
        // },
        }}
        />
      <Tab.Screen name="Lesson" component={SignLanguage}/>
    </Tab.Navigator>
  )
} 

export default function Root () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name="What do I know?" component={AtoZ}/>
          <Stack.Screen name="Greetings" component={Greetings}/>
          <Stack.Screen name="Updates" component={Updates}/>
          <Stack.Screen name="Main" component={TabNavigator} options={{headerShown:false,}} />
          <Stack.Screen name="LEARN THE LETTERS" component={LearnTL}/>
          <Stack.Screen name="Greetings Quiz" component={GotIt}/>
        </Stack.Navigator>      
      </NavigationContainer>
    )
  }

