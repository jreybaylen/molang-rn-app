import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { ROOT_NAVIGATOR } from './routes/root-navigator'

const Stack = createStackNavigator()

export default function Root () {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName="Main"
			>
				{ ROOT_NAVIGATOR.map(
					({ id, ...REST_NAVIGATION }) => (
						<Stack.Screen
							key={ id }
							{ ...REST_NAVIGATION }
						/>
					)
				) }
			</Stack.Navigator>      
		</NavigationContainer>
	)
}