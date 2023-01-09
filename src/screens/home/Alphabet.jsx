import React from 'react'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import { ALPHABET_DATA } from '../../data/alphabet'

export default function Alphabet () {
  const router = useNavigation()
  const Try = () => {
    alert( 'Nice Job' )
  }

  const FooterComponent = () => {
    return (
      <Button onPress={ Try }
        title={ styles.letter }
        style={ {
          ...styles.quizButton,
          ...styles.button
        } }
      >
        <Text 
          style={ styles.quizText }
        >
          READY FOR THE QUIZ
        </Text>
      </Button>
    )
  }
  
  return (
    <View 
      style={ styles.container }
    >
      <FlatList
        data={ ALPHABET_DATA }
        numColumns={ 3 }
        keyExtractor={( item ) => item.id }
        contentContainerStyle={ styles.flatlist }
        renderItem={({ item }) => (
          <View 
            style={ styles.item} 
          > 
            <Button
              onPress={ () => router.navigate( 'AlphabetContent', item) }
              title={ item.letter }
              style={ styles.button }
            >
              <View style={ styles.textContainer }>
                <Text 
                  style={ styles.text }
                >
                  { item.letter }
                </Text>
              </View>
            </Button>  
          </View>
        )}
        ListFooterComponent={ FooterComponent }
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    paddingTop: '5%', 
    paddingLeft: '4%'
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
    backgroundColor: '#87cefa'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 60,
    width: '150%',
    color: '#000',
    fontWeight:'bold'
  },
  quizText: {
    fontSize: 25,
    color: '#000',
    height: '100%',
    fontWeight:'bold',
  },
  quizButton: {
    width: '96%',
    height: '22%'
  }
}) 
