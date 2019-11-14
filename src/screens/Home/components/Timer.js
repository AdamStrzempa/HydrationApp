import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Notification from '../../../utils/Notification'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import convertSeconds from '../../../utils/convertSeconds'

const Timer = props => {
  const [secondsToEnd, setSeconds] = useState(7200)
  const [time, setTime] = useState('')
  const [timeToDrink, setTimeToDrink] = useState(false)

  useEffect(() => {
    if (props.startTime) {
      const recoverTime = Date.now() - props.startTime
      const seconds = Math.floor(recoverTime / 1000)
      setSeconds(secondsToEnd - seconds)
    }
  }, [])

  useEffect(() => {
    let interval = null

    if (props.firstHydration) {
      const oneDayInMs = 86400000
      if (Date.now() - props.firstHydration > oneDayInMs) {
        resetScene()
        return
      }
    }
    if (secondsToEnd < 0 && !timeToDrink) {
      if (Platform.OS == 'android') Notification()
      setTimeToDrink(true)
    }
    if (props.startTime) {
      interval = setInterval(() => {
        const newDisplayTime = convertSeconds(secondsToEnd)
        setTime(newDisplayTime)
        setSeconds(secondsToEnd - 1)
      }, 1000)
    } else if (!props.startTime && secondsToEnd !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [secondsToEnd, timeToDrink, time, props.startTime])

  const resetScene = () => {
    props.setFirstHydration(null)
    setTimeToDrink(false)
    props.setStartTime(null)
    props.addHydration(0)
    setSeconds(7200)
  }

  const onPressCircular = () => {
    if (props.startTime) {
      if (timeToDrink) {
        setTimeToDrink(false)
        props.setStartTime(Date.now())
        props.addHydration(props.hydration + 1)
        setSeconds(7200)
      }
    } else {
      const dateNow = Date.now()
      if (!props.firstHydration) {
        props.setFirstHydration(dateNow)
      }
      props.setStartTime(dateNow)
    }
  }

  return (
    <TouchableOpacity onPress={onPressCircular} style={styles.button}>
      <AnimatedCircularProgress
        size={200}
        width={15}
        fill={timeToDrink ? 100 : (secondsToEnd * 100) / 7}
        tintColor={timeToDrink ? '#bc0000' : '#62c2ff'}
        onAnimationComplete={() => {}}
        backgroundColor="#FFF"
      />
      <Text style={styles.text}>
        {timeToDrink ? 'Drink' : props.startTime ? time : 'Start'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    fontSize: 40
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Timer
