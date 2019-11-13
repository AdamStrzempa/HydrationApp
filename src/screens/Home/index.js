import React from 'react'
import Home from './Home'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'ramda'
import { setStartTime } from '../../redux/reducers/session/actions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const startTime = useSelector(state => state.session.startTime)
  const props = {
    setStartTime: compose(
      dispatch,
      setStartTime
    ),
    startTime
  }
  return <Home {...props} />
}

export default HomeScreen
