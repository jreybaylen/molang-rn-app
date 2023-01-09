import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import { Button, HStack } from 'native-base'
import { useRoute } from '@react-navigation/native'

export default function GreetingsMainContent() {
  const route = useRoute()
  const router = useNavigation()
  const Back = () => {
    router.navigate( 'Greetings' ) 
  }

  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
    >
        <View 
          style={ styles.h1Con }
        >
          <Text 
            style={ styles.h1 }
          >
            This is how you say {'\n'}
            " {route.params.name} "
          </Text>
        </View>
        <View 
          style={ styles.imageCon }
        >
            <Image
                style={ {
                  ...styles.image
                } }
                source={ route.params.path }
            />
        </View>
        {/* <View >
          <Text style={ { 
            ...styles.h2
           } }
          >
            HOW?
          </Text>
        </View> */}
        {/* <View style={ { 
          ...styles.paragraphCon
         } }>
          <Text style={ { 
            ...styles.paragraph
           } }
          >
            { route.params.description }
          </Text>
        </View> */}
          <HStack
            style={ {
                  ...styles.hStack
                } }
          >
            <Button 
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
                Next
              </Text>
            </Button>
            <Button 
            onPress={ Back }
              style={ {
                ...styles.button,
                ...styles.quizButton
              } }
            >
              <Text 
                style={ styles.quizText }
              >
                Back
              </Text>
            </Button>
          </HStack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({ 
  h1Con: {
    height: '25%',
    paddingTop: '5%'
  },
  h1: {
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  imageCon: {
    width: '70%',
    height: '55%',
    borderWidth: 5,
    marginLeft: '15%',
    marginBottom: '8%',
    backgroundColor: '#87cefa'
  },
  marginLeft: {
    marginRight: '6%'
  },
  quizText: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold'
  },
  button: {
    borderWidth: 2,
    height: '100%',
  },
  quizButton: {
    width: '47%',
    backgroundColor: '#87cefa',
  },
  hStack: {
    width: '70%',
    height: '12%',
    marginLeft: '15%',
  },
  // h2: {
  //   fontSize: 28, 
  //   color: '#000', 
  //   paddingTop: '5%', 
  //   fontWeight: '700', 
  //   textAlign:'center'
  // },
  // paragraphCon: {
  //   width: '90%', 
  //   height: '25%', 
  //   marginLeft: '5%',
  //   marginBottom: '3.5%'
  // },
  // paragraph: {
  //   fontSize: 18, 
  //   color: '#000', 
  //   height: '100%',
  //   paddingTop: '2%',
  //   fontWeight: '700', 
  //   marginBottom: '3%',
  //   textAlign: 'center'
  // }
 })