/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import messaging from '@react-native-firebase/messaging'
import Navigation from './navigation/Navigation'
import store from './store'
import { colors } from './ui'

const App = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('New push notification!', remoteMessage)
  })

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.primary} />
      <Navigation />
    </Provider>
  )
}

export default App
