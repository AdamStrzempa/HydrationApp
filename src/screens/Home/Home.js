import React, { Component, Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextInput, SafeAreaView, StyleSheet, View, Text, Image } from 'react-native'
import GLASS_IMAGE from './images/glass.png'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import i18next from '../../translation'

import api from '../../network/api'
import Wave from 'react-native-waveview'

const propTypes = {}

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ position: 'absolute', bottom: 100, swidth: 150, height: 200}}
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
  wave: {
    width: 80,
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
