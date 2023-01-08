import React from 'react'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

export default function SignLanguage () {
  const router = useNavigation()
  const handleTapLearn = () => {
    router.navigate('LEARN THE LETTERS')
  }
  
  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
    >
      <Button
        style={ style.quiz }
        onPress={ handleTapLearn }
      >
        <Text
          style={ style.quizText }
        >
          LEARN THE LETTERS
        </Text>
      </Button>
    </SafeAreaView>
  )
}

const style = StyleSheet.create ({
  container: {
    paddingTop: 15, 
    paddingLeft: 15,
  },
  item: {
    width: 120,
    height: 150,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: `#87cefa`,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "black",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    
  },
  text: {
    marginTop: -5,
    fontSize: 100,
    fontWeight:'bold',
    color: `#708090`,
    shadowColor: 'black',
  },
  quiz: {
    width: 300,
    marginTop: 20,
    marginLeft: '15%',
    backgroundColor: `#87cefa`,
    borderWidth: 2,
  },
  quizText: {
    fontSize: 20,
    fontWeight:'bold',
    color: `black`,
  }
}) 
