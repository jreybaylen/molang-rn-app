import React, {useState} from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Button } from 'native-base'

export default function AtoZ() {
  const [button, setButton] = useState([
    {letter: 'A', id: '1'},
    {letter: 'B', id: '2'},
    {letter: 'C', id: '3'},
    {letter: 'D', id: '4'},
    {letter: 'E', id: '5'},
    {letter: 'F', id: '6'},
    {letter: 'G', id: '7'},
    {letter: 'H', id: '8'},
    {letter: 'I', id: '9'},
    {letter: 'J', id: '10'},
    {letter: 'K', id: '11'},
    {letter: 'L', id: '12'},
    {letter: 'M', id: '13'},
    {letter: 'N', id: '14'},
    {letter: 'O', id: '15'},
    {letter: 'P', id: '16'},
    {letter: 'Q', id: '17'},
    {letter: 'R', id: '18'},
    {letter: 'S', id: '19'},
    {letter: 'T', id: '20'},
    {letter: 'U', id: '21'},
    {letter: 'V', id: '22'},
    {letter: 'W', id: '23'},
    {letter: 'X', id: '24'},
    {letter: 'Y', id: '25'},
    {letter: 'Z', id: '26'},
  ])

  const Try = () => {
    alert('Nice Job')
  }
  return (
    <View style={style.container}>
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
    </View>
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
  }
}) 
