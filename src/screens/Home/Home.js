import React, { useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  Dimensions
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Timer from './components/Timer'
import Wave from 'react-native-waveview'

import GLASS_IMAGE from './images/glass.png'
import THUMBS_UP_ICON from './images/thumbs-up.jpg'

const { width, height } = Dimensions.get('window')

const Home = props => {
  const checkModal = () => props.hydration >= 8 && props.firstHydration != null

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        style={{ flex: 1 }}
        animationType="slide"
        transparent={false}
        visible={checkModal()}>
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
      </Modal>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.nextGlassText}>To drink another glass</Text>
        <Timer
          setStartTime={props.setStartTime}
          startTime={props.startTime}
          addHydration={props.addHydration}
          hydration={props.hydration}
          setFirstHydration={props.setFirstHydration}
          firstHydration={props.firstHydration}
        />
        <Text style={styles.infoText}>
          You should be drinking 2l of water every day
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.image} source={GLASS_IMAGE} resizeMode="contain" />
        <Wave
          style={[styles.wave, { top: 100 - 5 * props.hydration }]}
          H={30}
          waveParams={[
            { A: 10, T: 180, fill: '#62c2ff' },
            { A: 15, T: 140, fill: '#0087dc' },
            { A: 20, T: 100, fill: '#1aa7ff' }
          ]}
          animated={true}
        />
        <View
          style={[
            styles.fakeWater,
            { height: 5 * props.hydration, top: 140 - 5 * props.hydration }
          ]}
        />
        <Text style={styles.currentStateText}>
          Your current state: {props.hydration}/8
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  iconView: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 100,
    height: 100
  },
  image: {
    position: 'absolute',
    top: 43,
    width: 100,
    height: 100
  },
  currentStateText: {
    position: 'absolute',
    top: 150,
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
    width: 40,
    height: 0,
    position: 'absolute',
    top: 130,
    backgroundColor: '#1aa7ff'
  },
  wave: {
    width: 40,
    top: 100,
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
