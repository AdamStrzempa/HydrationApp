import React from 'react'
import Login from './Login'
import { useNavigation } from 'react-navigation-hooks'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'ramda'
import { login } from '../../redux/reducers/session/actions'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const reduxState = useSelector(state => state)
  const { navigate } = useNavigation()
  const props = {
    login: compose(
      dispatch,
      login
    ),
    navigate,
    reduxState
  }
  return <Login {...props} />
}

LoginScreen.navigationOptions = {
  header: null
}

export default LoginScreen
