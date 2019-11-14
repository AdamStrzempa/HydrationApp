import React from 'react'
import Home from './Home'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'ramda'
import { setStartTime, addHydration } from '../../redux/reducers/session/actions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const startTime = useSelector(state => state.session.startTime)
  const hydration = useSelector(state => state.session.currentHydration)
  const props = {
    setStartTime: compose(
      dispatch,
      setStartTime
    ),
    addHydration: compose(
      dispatch,
      addHydration
    ),
    startTime,
    hydration
  }
  return <Home {...props} />
}

export default HomeScreen
