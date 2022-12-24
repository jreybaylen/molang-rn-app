import React from 'react'
import { Text, SafeAreaView, StyleSheet} from 'react-native'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function Greetings() {
  const router = useNavigation()
  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
    >
      <Button
      onPress={ () => router.navigate('Greetings Quiz') }
      style={style.quiz}
      >
        <Text style={style.quizText}>Got It!</Text>
      </Button>  
    </SafeAreaView>
  )
}

const style = StyleSheet.create ({
  quiz: {
    width: 200,
    marginTop: 20,
    marginLeft: '25%',
    backgroundColor: `#87cefa`,
    borderWidth: 2,
  },
  quizText: {
    fontSize: 20,
    fontWeight:'bold',
    color: `black`,
  }
}) 