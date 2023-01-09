import Home from '../screens/home'
import Alphabet from '../screens/home/Alphabet'
import Greetings from '../screens/home/Greetings'
import WhatsNew from '../screens/home/WhatsNew'
import Leaderboard from '../screens/home/Leaderboard'
import CategoryGreetings from '../screens/category/Greetings'
import School from '../screens/category/School'
import Travel from '../screens/category/Travel'
import BuySome from '../screens/category/BuySome'
import CategoryContent from '../screens/shared/CategoryContent'
import Letters from '../screens/shared/Letters'

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
        id: 'alphabet',
        name: 'Alphabet',
        component: Alphabet
    },
    {
        id: 'greetings',
        name: 'Greetings And Common Phrases',
        component: Greetings
    },
    {
        id: 'Updates',
        name: 'Updates', 
        component: WhatsNew 
    },
    {
        id: 'Leaderboard',
        name: 'Leaderboard',
        component: Leaderboard
    },
    {
        id: 'category-reetings',
        name: 'Greetings',
        component: CategoryGreetings,
        options
    },
    {
        id: 'school',
        name: 'School',
        component: School,
        options
    },
    {
        id: 'travel',
        name: 'Travel',
        component: Travel,
        options
    },
    {
        id: 'buy-some',
        name: 'BuySome',
        component: BuySome,
        options
    },
    {
        id: 'category-content',
        name: 'Greetings Content',
        component: CategoryContent,
        options
    },
    {
        id: 'alphabet-content',
        name: 'AlphabetContent',
        component: Letters,
        options
    }
]