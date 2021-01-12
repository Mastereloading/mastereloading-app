/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { Provider } from 'react-redux'
import messaging from '@react-native-firebase/messaging'

import Navigation from './navigation/Navigation'
import store from './store'

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(remoteMessage => {
      Alert.alert(
        JSON.stringify(remoteMessage.notification.title),
        JSON.stringify(remoteMessage.notification.body)
      )
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('   Abriu o App em background.   ')
    })

    messaging().getInitialNotification().then(remoteMessage => {
      console.log('   Abriu o App fechado.   ')
    })
  }, [])

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;
