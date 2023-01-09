import React from 'react'
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import { Button, VStack, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import AtoZImage from '../../assets/AtoZ3.png'
import GreetingsImage from '../../assets/greetings3.png'
import Update from '../../assets/updated3.png'

export default function Home () {
  const router = useNavigation()
  const handleNavigateAtoZ = () => {
    router.navigate('Alphabet')
  }
  const handleNavigateGreetings = () => {
    router.navigate('Greetings And Common Phrases')
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
        style={ { 
          ...styles.height 
        }}
      >
        <VStack 
          style={ {
            ...styles.width,
            ...styles.height
          } }
        >
          <Button
            title="A to z"
            style={ {
              ...styles.height,
              ...styles.button,
              ...styles.borderRight
            } }
            onPress={ handleNavigateAtoZ }
          >
            <VStack>            
              <View>
                <Text
                  style={ {
                    ...styles.color,
                    ...styles.heading,
                    ...styles.headingLeft
                  } }
                >
                  Alphabet
                </Text>
              </View>
              <View
                style={ styles.imageLeftConHeight }
              >
                <Image
                  style={ styles.image }
                  source={ AtoZImage }
                />
              </View>
            </VStack>
          </Button>       
        </VStack>
        <VStack
          style={ {
            ...styles.width,
            ...styles.height
          } }
        >
          <Button
            title="Learn More"
            style={ {
              ...styles.mb5,
              ...styles.button,
              ...styles.rbutton,
              ...styles.borderLeft,
              ...styles.borderBottom,
              ...styles.buttonHeightHalf
            } }
            onPress={ handleNavigateGreetings }
          >
            <View
              style={ {
                ...styles.paddingTop,
                  ...styles.headerContainer
              } }
            >
              <Text
                style={ {
                  ...styles.color,
                  ...styles.headingG,
                } }
              >
               Greetings And Common Phrases
              </Text>    
            </View>
            <View
                style={ styles.rightImage }
            >
              <Image
                style={ {
                  ...styles.image
                } }
                source={ GreetingsImage }
              />
            </View>
          </Button>   
          <Button
            title="Update"
            style={ {
              ...styles.button,
              ...styles.rbutton,
              ...styles.borderTop,
              ...styles.borderLeft,
              ...styles.buttonHeightHalf
            } }
            onPress={ handleNavigateUpdates }
          >
            <View
              style={ {
                ...styles.marginBottom,
                  ...styles.headerContainer
              } }
            >
              <Text
                style={ {
                  ...styles.color, 
                  ...styles.heading,
                  ...styles.paddingTop
                } }
              >
                Updates
              </Text>
            </View>
            <View
                style={ styles.rightImage }
            >
              <Image
                style={ styles.image }
                source={ Update }
              />
            </View>
          </Button>
        </VStack>
      </HStack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  height: { 
    height: '100%'
  },
  width: {
    width: '50%'
  },
  color: {
    color: '#000'
  },
  button: {
    backgroundColor: '#87cefa'
  },
  paddingTop: {
    paddingTop: '5%'
  },
  mb5: {
    marginBottom: '4%'
  },
  headingG: {
    fontSize: 26,
    height: '200%',
    marginTop: '40%',
    fontWeight: 'bold'
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    position: 'absolute'
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
  },
  rbutton: {
    height: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  headerContainer: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marginBottom: {
    marginBottom: '20%'
  },
  imageConHeight: {
    height: '70%'
  },  
  rightImage: {
    height: '70%',
    paddingTop: '30%'
  }, 
  paddingRight: {
    marginLeft: '6%'
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
  },
  imageLeftConHeight: {
    height: '100%',
    paddingTop: '80%'
  },
  headingLeft: {
    marginLeft: '20%',
    marginTop: '20%'
  },
})




