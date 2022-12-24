import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

// import AtoZ from './AtoZ'

export default function SignLanguage (prop) {
  const router = useNavigation()
  // const button = () => {AtoZ.button}
  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
    >
      <Button
      onPress={ () => router.navigate('LEARN THE LETTERS') }
      style={style.quiz}
      >
        <Text style={style.quizText} >LEARN THE LETTERS</Text>
      </Button>  
      {/* <View style={style.container}>
      <FlatList
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={button}
        renderItem={({item}) => (
          <Button
            onPress={ Try }
            title={item.letter}
            style={style.item}
          >
            <Text style={style.text}>{item.letter}</Text>
          </Button>   
        )}
      />
      </View> */}
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
