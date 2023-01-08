import React from 'react'
import { Text, SafeAreaView, StyleSheet} from 'react-native'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function Greetings () {
  const router = useNavigation()
  const handleTapQuiz = () => {
    router.navigate('Greetings Quiz')
  }

  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
    >
      <Button
        style={ style.quiz }
        onPress={ handleTapQuiz }
      >
        <Text
          style={ style.quizText }
        >
          Got It!
        </Text>
      </Button>  
    </SafeAreaView>
  )
}

const style = StyleSheet.create ({
  quiz: {
    width: 200,
    marginTop: 20,
    marginLeft: '25%',
    backgroundColor: '#87cefa',
    borderWidth: 2,
  },
  quizText: {
    fontSize: 20,
    fontWeight:'bold',
    color: 'black',
  }
}) 