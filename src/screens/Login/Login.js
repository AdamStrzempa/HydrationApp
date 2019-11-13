import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Dimensions,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

import i18next from '../../translation'

import api from '../../network/api'

import firebase from 'react-native-firebase'

const { width } = Dimensions.get('window')

const propTypes = {}

const Login = props => {
  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword("test@mail.com", "myCustomPassword")
      .then(() => console.warn('done'))
      .catch(error => console.error('error from Home: ', error))
  }

  const handleLogin = () => {
    // const { email, pasword } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword("test@mail.com", "myCustomPassword")
      .then(() => props.navigate('Tests'))
      .catch(error => console.error('error from Home: ', error))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome in Hydration App</Text>
      <View style={styles.view}>
        <Text style={styles.passwordText}>Password</Text>
        <TextInput
          style={styles.textInput}
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />
        <Button
          title="Login"
          onPress={() => handleLogin('Simple Button pressed')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  passwordText: {
    color: '#383838',
    paddingBottom: 5
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50
  }
})

export default Login
