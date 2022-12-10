# EXPORT & IMPORT
```
export { Root }
or
export const Root = () => { }
export function Root () { }

import { Root } from 'filename'
```

```
export { Root as RootApp }

import { RootApp } from 'filename'
```

```
export default function Root () {

}

const Root = () => { }

export { Root as default }

import RootNameApp from 'filename'
```

```
export function Root () {

}

export const Root2 = () => { }

import { Root, Root2 } from 'filename'
import * as RootApp from 'fiename

--> Access
RootApp.Root
```

```
export default function Root () {

}

export const Root2 = () => { }

import Root, { Root2 } from './filename
```



Root.jsx

// const Root = () => {
//   const [ name, setName ] = React.useState('John Doe')
//   const handleChaneName = () => {
//     setName((prevName) => prevName === 'John Cor' ? 'John Doe' : 'John Cor')
//   }
// }


// <View
//   style={ styles.container }
// >
//   <Text
//     style={ styles.heading }
//   >
//     <HomeScreen
//       name={ name }
//       onChangeName={ handleChaneName }
//     />
//   </Text>
//   <Text>
//     <SignLanguage/>
//   </Text>
// </View>

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  heading: {
    textAlign: 'center'
  }
})

app.jsx
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  SL

  const styles = StyleSheet.create({
  heading: {
    fontSize: 30
  }
})


Home

const styles = StyleSheet.create({
  heading: {
    fontSize: 30
  }
})