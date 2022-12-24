/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   useColorScheme
// } from 'react-native';
import { NativeBaseProvider } from 'native-base';
// import 'react-native-gesture-handler';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

import Root from './src/Root';




const App = () => {


  return (
    <NativeBaseProvider>
        {/* <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        /> */}
        <Root/>
    </NativeBaseProvider>

  );
};

export default App;
