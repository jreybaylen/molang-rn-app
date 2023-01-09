import React from 'react'
import { Text, View,StyleSheet, FlatList  } from 'react-native'
import { Button, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { GREETINGS_DATA } from '../../data/greetings'

export default function BuySome () {
  const router = useNavigation()
  const Back = () => {
  router.navigate( 'Greetings And Common Phrases' )
  }
  const Try = () => {
    alert( 'Nice Job' )
  }
  const FooterComponent = () => {
    return (
      <HStack
        style={ styles.hStack }
      >
        <Button
          onPress={ Try }
          title={ styles.letter }
          style={ {
            ...styles.quizButton,
            ...styles.button,
            ...styles.marginLeft
          } }
        >
          <Text
            style={ styles.quizText }
          >
            Quiz
          </Text>
        </Button>
        <Button onPress={ Back }
          title={ styles.letter }
          style={ {
            ...styles.quizButton,
            ...styles.button
          } }
        >
          <Text
            style={ styles.quizText }
          >
            Back
          </Text>
        </Button>
      </HStack>
    )
  }

  return (
    <View
      style={ styles.container }
    >
      <FlatList
        data={ GREETINGS_DATA }
        // numColumns={ 1 }
        keyExtractor={( item ) => item.id }
        renderItem={({ item }) => (
          <Button
            onPress={ () => router.navigate( 'Greetings Content', item ) }
            title={ item.letter }
            style={ styles.button }
          >
            <View style={ styles.textContainer }>
              <Text
                style={ styles.text }
              >
                { item.name }
              </Text>
            </View>
          </Button>
        )}
        ListFooterComponent={ FooterComponent }
        contentContainerStyle={ styles.flatlist }
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    paddingTop: '5%',
    paddingLeft: '4%',
    paddingRight: '4%'
  },
  flatlist: {
    paddingBottom: '10%'
  },
  item: {
    width: '30%',
    height: '100%',
    marginRight: '3%',
    marginBottom: '5%'
  },
  button: {
    borderWidth: 2,
    backgroundColor: '#87cefa',
    marginBottom: '5%'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    color: '#000',
    fontWeight:'bold'
  },
  quizText: {
    fontSize: 30,
    color: '#000',
    fontWeight:'bold',
  },
  quizButton: {
    width: '47%',
    height: '100%'
  },
  hStack: {
    marginTop: '5%',
    height: '25%',
    width: '100%'
  },
  marginLeft: {
    marginRight: '6%'
  }
})
