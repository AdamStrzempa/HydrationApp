import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './Login'
import HomeScreen from './Home'

const MainNavigator = createSwitchNavigator(
  {
    LoginScreen: LoginScreen,
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: 'LoginScreen',
  }
)

const App = createAppContainer(MainNavigator)

export default App
