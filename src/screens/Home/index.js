import React from 'react'
import Home from './Home'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'ramda'
import {
  setStartTime,
  addHydration,
  setFirstHydration
} from '../../redux/reducers/session/actions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const startTime = useSelector(state => state.session.startTime)
  const hydration = useSelector(state => state.session.currentHydration)
  const firstHydration = useSelector(state => state.session.firstHydration)
  const props = {
    setStartTime: compose(
      dispatch,
      setStartTime
    ),
    addHydration: compose(
      dispatch,
      addHydration
    ),
    setFirstHydration: compose(
      dispatch,
      setFirstHydration
    ),
    startTime,
    hydration,
    firstHydration
  }
  return <Home {...props} />
}

export default HomeScreen
