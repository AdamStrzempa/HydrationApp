import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './Home'
import TestsScreen from './Tests'

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Tests: TestsScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  }
)

const App = createAppContainer(MainNavigator)

export default App
