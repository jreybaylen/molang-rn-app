import Home from '../screens/Home'
import Alphabet from '../screens/home/Alphabet'
import GreetingsMain from '../screens/home/GreetingsMain'

const options = {
    headerShown: false
}

export const ROOT_NAVIGATOR = [
    {
        id: 'main',
        name: 'Main',
        component: Home,
        options
    },
    {
        id: 'alphabets',
        name: 'Alphabets',
        component: Alphabet
    },
    {
        id: 'main-greetings',
        name: 'Greetings And Common Phrases',
        component: GreetingsMain
    }
]