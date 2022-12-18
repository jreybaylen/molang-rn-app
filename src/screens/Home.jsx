import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { Button, VStack, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import AtoK from './AtoK'
import LtoZ from './LtoZ'
import Update from './Update'

export default function Home (prop) {
  const router = useNavigation()

  const greetings = () => {
    router.navigate('Greetings')
  }

  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
    >
      <VStack space={2} alignItems="center">
        <HStack space={2}>
          <Button
            size="lg"
            onPress={ greetings }
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
            style={style.click}
          >
            <Text>Greetings!</Text>
          </Button>
          <Button
            size="lg"
            title="A to K"
            accessibilityLabel="Learn more about this purple button"
            style={style.click}
          >
            <Text>A to K</Text>
          </Button>
        </HStack>
        <HStack space={2}>
          <Button
            size="lg"
            title="L to Z"
            accessibilityLabel="Learn more about this purple button"
          >
           <Text>L to Z</Text>
          </Button>
          <Button
            size="lg"
            title="Update"
            accessibilityLabel="Learn more about this purple button"
          >
            <Text>Update</Text>
          </Button>
        </HStack>
      </VStack>
    </SafeAreaView>
  )
}

const style = StyleSheet.create ({
  click: {
    backgroundColor: 'blue',
    width: '100%',
  }
})




