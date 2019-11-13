import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextInput, SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import i18next from '../../translation'
import api from '../../network/api'
import Wave from 'react-native-waveview'

import GLASS_IMAGE from './images/glass.png'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={90}
          tintColor="#62c2ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#FFF" />
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
      <Image
        style={{ position: 'absolute', bottom: 100, width: 150, height: 150}}
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    bottom: 105,
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
