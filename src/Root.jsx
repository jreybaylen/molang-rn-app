import React from 'react';
import { Text, View } from 'react-native';

import HomeScreen from './screens/Home'
import { SignLanguage } from './screens/SignLanguage'

const Root = () => {
  return (
    <View>
        <HomeScreen />
        <SignLanguage />
        <Text>Hello, I am John or</Text>
    </View>
  );
}

export { Root };