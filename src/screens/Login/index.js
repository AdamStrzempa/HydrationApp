import React from 'react'
import Login from './Login'
import { useNavigation } from 'react-navigation-hooks'

const LoginScreen = () => {
  const { navigate } = useNavigation()
  const props = {
    navigate
  }
  return <Login {...props} />
}

LoginScreen.navigationOptions = {
  header: null
}

export default LoginScreen
