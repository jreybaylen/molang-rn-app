import Home from '../screens/Home'
import Alphabet from '../screens/home/Alphabet'
import GreetingsMain from '../screens/home/GreetingsMain'
import Updates from '../screens/home/Update'
import Leaderboard from '../screens/home/Leaderboard'
import Greetings from '../screens/greetingsMain/Greetings'
import School from '../screens/greetingsMain/School'
import Travel from '../screens/greetingsMain/Travel'
import BuySome from '../screens/greetingsMain/BuySome'
import GreetingsContent from '../screens/content/GreetingsMainContent'
import AlphabetContent from '../screens/content/AlphabetContent'

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
    },
    {
        id: 'Updates',
        name: 'Updates', 
        component: Updates 
    },
    {
        id: 'Leaderboard',
        name: 'Leaderboard',
        component: Leaderboard
    },
    {
        id: 'Greetings',
        name: 'Greetings',
        component: Greetings,
        options
    },
    {
        id: 'School',
        name: 'School',
        component: School,
        options
    },
    {
        id: 'Travel',
        name: 'Travel',
        component: Travel,
        options
    },
    {
        id: 'BuySome',
        name: 'BuySome',
        component: BuySome,
        options
    },
    {
        id: 'Greetings Content',
        name: 'Greetings Content',
        component: GreetingsContent,
        options
    },
    {
        id: 'AlphabetContent',
        name: 'AlphabetContent',
        component: AlphabetContent,
        options
    },
]