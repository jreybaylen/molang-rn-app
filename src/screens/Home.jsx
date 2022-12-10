import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Button, VStack, HStack } from 'native-base'

export default function Home (prop) {
  const handlePressButton = () => {
    alert(123)
  }
  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
    >
      <VStack space={2} alignItems="center">
        <HStack space={2}>
          <Button
            size="lg"
            onPress={ handlePressButton }
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
          >
            Greetings!
          </Button>
          <Button
            size="lg"
            title="A to K"
            accessibilityLabel="Learn more about this purple button"
          >
            A to K
          </Button>
        </HStack>
        <HStack space={2}>
          <Button
            size="lg"
            title="L to Z"
            accessibilityLabel="Learn more about this purple button"
          >
            L to Z
          </Button>
          <Button
            size="lg"
            title="Update"
            accessibilityLabel="Learn more about this purple button"
          >
            Update
          </Button>
        </HStack>
      </VStack>
    </SafeAreaView>
  )
}

const style = StyleSheet.create ({
  button: {
    flex:1,
  }
})




