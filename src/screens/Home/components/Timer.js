import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import moment from 'moment'

const convertSeconds = secondsToEnd => {
  const duration = moment.duration(secondsToEnd, 'seconds')

  const seconds = duration.seconds()
  const minutes = duration.minutes()
  const hours = duration.hours()

  const sHours = hours < 10 ? `0${hours}:` : `${hours}:`
  const sMinutes = minutes < 10 ? `0${minutes}:` : `${minutes}:`
  const sSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

  const newTime = sHours + sMinutes + sSeconds

  return newTime
}

const Timer = props => {
  const [secondsToEnd, setSeconds] = useState(7)
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
    if (timeToDrink) {
      clearInterval(interval)
      return
    }
    if (secondsToEnd < 0 && !timeToDrink) {
      console.log('test2')

      setTimeToDrink(true)
    }
    console.log('test', timeToDrink)
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

  const onPressCircular = () => {
    if (props.startTime) {
      if (timeToDrink) {
        setTimeToDrink(false)
        props.setStartTime(Date.now())
        props.addHydration(props.hydration + 1)
        setSeconds(7)
      }
    } else {
      props.setStartTime(Date.now())
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
