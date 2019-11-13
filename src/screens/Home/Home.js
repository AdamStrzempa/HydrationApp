import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextInput, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import useInterval from '../../utils/interval.js'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import i18next from '../../translation'
import api from '../../network/api'
import Wave from 'react-native-waveview'

import GLASS_IMAGE from './images/glass.png'

function timeConversion(duration) {
  const portions: string[] = [];

  const msInHour = 1000 * 60 * 60;
  const hours = Math.trunc(duration / msInHour);
  if (hours > 0) {
    portions.push(hours + 'h');
    duration = duration - (hours * msInHour);
  }

  const msInMinute = 1000 * 60;
  const minutes = Math.trunc(duration / msInMinute);
  if (minutes > 0) {
    portions.push(minutes + 'm');
    duration = duration - (minutes * msInMinute);
  }

  const seconds = Math.trunc(duration / 1000);
  if (seconds > 0) {
    portions.push(seconds + 's');
  }

  return portions.join(' ');
}

const Home = props => {
  const [time, setTime] = useState(7200000)

  useInterval(() => {
    const { startTime } = props
    if (props.startTime) setTime(time - 1)
  }, 1000)

  const updateTime = time => {
    let h,m,s;
    h = Math.floor(time/1000/60/60);
    m = Math.floor((time/1000/60/60 - h)*60);
    s = Math.floor(((time/1000/60/60 - h)*60 - m)*60);
    return <Text>{h},{m},{s}</Text>
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nextGlassText}>To drink another glass</Text>
      <TouchableOpacity onPress={() => props.setStartTime(Date.now())} style={styles.button}>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={100}
          tintColor="#62c2ff"
          onAnimationComplete={() => {}}
          backgroundColor="#FFF" />
        <Text style={styles.text}>Start {updateTime(time)}</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>You need to drink 2l of water a day</Text>

      <Image
        style={{ position: 'absolute', bottom: 200, width: 150, height: 150}}
        source={GLASS_IMAGE}
        resizeMode='contain'
      />
      <Wave
          style={styles.wave}
          H={30}
          waveParams={[
              {A: 10, T: 180, fill: '#62c2ff'},
              {A: 15, T: 140, fill: '#0087dc'},
              {A: 20, T: 100, fill: '#1aa7ff'},
          ]}
          animated={true}
      />
      <Text style={styles.currentStateText}>Your current state: 0/8</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  currentStateText: {
    position: 'absolute',
    bottom: 120,
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
  },
  infoText: {
    marginTop: 20,
    fontSize: 25,
  },
  nextGlassText: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    position: 'absolute',
    fontSize: 40,
  },
  wave: {
    width: 60,
    bottom: 205,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'absolute'
  },
  waveBall: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: 'hidden',
  },
  description: {
    paddingHorizontal: 35,
    paddingVertical: 5,
    fontSize: 18,
    color: Colors.dark
  }
})

export default Home
