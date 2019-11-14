import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native'

import firebase from 'react-native-firebase'

const Login = props => {
  const [text, setText] = useState('')

  const handleLogin = () => {
    // const { email, pasword } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword("test@mail.com", text)
      .then(() => props.navigate('HomeScreen'))
      .catch(error => console.error('error from Home: ', error))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome in Hydration App</Text>
      <View style={styles.view}>
        <Text style={styles.passwordText}>Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry
          onChangeText={text => setText(text)}
          value={text}
        />
        <Button
          title="Login"
          onPress={() => handleLogin('Simple Button pressed')}
        />
      </View>
    </SafeAreaView>
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
