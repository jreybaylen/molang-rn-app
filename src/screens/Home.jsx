import React from 'react'
import { Button, VStack, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native'

import aToZSrc from '../assets/AtoZ.png'
import updatedSrc from '../assets/updated.png'
import greetingsSrc from '../assets/greetings.png'

export default function Home () {
  const router = useNavigation()
  const handleNavigateAtoZ = () => {
    router.navigate('What do I know?')
  }
  const handleNavigateGreetings = () => {
    router.navigate('Greetings')
  }
  const handleNavigateUpdates = () => {
    router.navigate('Updates')
  }

  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
    >
      <HStack
        space={ 2 }
        alignItems="center"
        justifyContent="center"
        style={ styles.hstack }
      >
        <VStack>
          <Button
            title="A to z"
            style={ {
              ...styles.button,
              ...styles.borderRight
            } }
            onPress={ handleNavigateAtoZ }
          >
            <Text
              style={ {
                ...styles.heading,
                ...styles.headingLeft
              } }
            >
              Alphabet
            </Text>
            <Image
              resizeMode="cover"
              source={ aToZSrc }
            />
          </Button>       
        </VStack>
        <VStack>
          <Button
            title="Learn More"
            style={ {
              ...styles.mb5,
              ...styles.button,
              ...styles.buttonHeightHalf,
              ...styles.borderLeft,
              ...styles.borderBottom
            } }
            onPress={ handleNavigateGreetings }
          >
            <Text
              style={ styles.heading }
            >
              Greetings!
            </Text>
            <Image
              resizeMode="cover"
              style={ styles.image }
              source={ greetingsSrc }
            />
          </Button>   
          <Button
            title="Update"
            style={ {
              ...styles.button,
              ...styles.buttonHeightHalf,
              ...styles.borderLeft,
              ...styles.borderTop
            } }
            onPress={ handleNavigateUpdates }
          >
            <Text
              style={ styles.heading }
            >
              Updates
            </Text>
            <Image
              resizeMode="cover"
              style={ styles.image }
              source={ updatedSrc }
            />
          </Button>
        </VStack>
      </HStack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  hstack: {
    height: '100%'
  },
  button: {
    height: '100%',
    position: 'relative',
    backgroundColor: '#87cefa'
  },
  buttonHeightHalf: {
    height: '50%'
  },
  mb5: {
    marginBottom: 5
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    position: 'absolute',
    top: '-12%'
  },
  headingLeft: {
    marginLeft: 35
  },
  image: {
    right: '15%',
    position: 'relative'
  },
  borderRight: {
    borderRightWidth: 2,
    borderTopRightRadius: 0,
    borderRightColor: '#000',
    borderBottomRightRadius: 0
  },
  borderLeft: {
    borderLeftWidth: 2,
    borderLeftColor: '#000'
  },
  borderTop: {
    borderTopWidth: 2,
    borderTopColor: '#000',
    borderTopLeftRadius: 10
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    borderBottomLeftRadius: 10
  }
})




