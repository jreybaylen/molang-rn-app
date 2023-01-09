import React from 'react'
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'

import Root from './src/Root'

const App = () => {
	return (
		<NativeBaseProvider>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="#87cefa"
			/>
			<Root />
		</NativeBaseProvider>
	)
}

export default App