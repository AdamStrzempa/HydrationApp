import React from 'react'
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Timer from './components/Timer'
import Wave from 'react-native-waveview'

import GLASS_IMAGE from './images/glass.png'
import THUMBS_UP_ICON from './images/thumbs-up.jpg'

const Home = props => {
  return (
    <SafeAreaView style={styles.container}>
      {props.hydration > 8 ? (
        <View style={styles.iconView}>
          <Image
            style={styles.icon}
            source={THUMBS_UP_ICON}
            resizeMode="contain"
          />
          <Text style={[styles.infoText, { textAlign: 'center' }]}>
            You have completed your water demand
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.nextGlassText}>To drink another glass</Text>
          <Timer
            setStartTime={props.setStartTime}
            startTime={props.startTime}
            addHydration={props.addHydration}
            hydration={props.hydration}
          />
          <Text style={styles.infoText}>
            You need to drink 2l of water a day
          </Text>
          <Image
            style={styles.image}
            source={GLASS_IMAGE}
            resizeMode="contain"
          />
          <Wave
            style={[styles.wave, { bottom: 205 + 10 * props.hydration }]}
            H={30}
            waveParams={[
              { A: 10, T: 180, fill: '#62c2ff' },
              { A: 15, T: 140, fill: '#0087dc' },
              { A: 20, T: 100, fill: '#1aa7ff' }
            ]}
            animated={true}
          />
          <View style={[styles.fakeWater, { height: 10 * props.hydration }]} />
          <Text style={styles.currentStateText}>
            Your current state: {props.hydration}/8
          </Text>
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  iconView: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 150,
    height: 150
  },
  image: {
    position: 'absolute',
    bottom: 200,
    width: 150,
    height: 150
  },
  currentStateText: {
    position: 'absolute',
    bottom: 120,
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30
  },
  infoText: {
    marginTop: 20,
    fontSize: 25
  },
  nextGlassText: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    position: 'absolute',
    fontSize: 40
  },
  fakeWater: {
    width: 60,
    height: 0,
    position: 'absolute',
    bottom: 205,
    backgroundColor: '#1aa7ff'
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
    overflow: 'hidden'
  },
  description: {
    paddingHorizontal: 35,
    paddingVertical: 5,
    fontSize: 18,
    color: Colors.dark
  }
})

export default Home
