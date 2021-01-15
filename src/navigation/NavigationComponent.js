import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import messaging from '@react-native-firebase/messaging'
import { onUserChanged } from '../lib/firestore'
import SignInStackNavigator from './SignInStackNavigator'
import AuthDrawerNavigator from './AuthDrawerNavigator'
import { navigate } from './RootNavigation'

const Component = () => {
  const [isAuth, setIsAuth] = useState(
    onUserChanged((user) => {
      setIsAuth(user)
    })
  )

  useEffect(() => {
    const unsubscribe = messaging().onMessage(remoteMessage => {
      Alert.alert(
        JSON.stringify(remoteMessage.notification?.title),
        JSON.stringify(remoteMessage.notification?.body)
      )
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Abriu o app do background...')
      console.log(remoteMessage)
      console.log(remoteMessage != null)
      if (remoteMessage !== null) {
        console.log('entrou')
        navigate('Notification', { screen: 'NotificationSpecific', data: remoteMessage })
      }
    })

    messaging().getInitialNotification().then(remoteMessage => {
      console.log('Abriu o app que estava fechado...')
      console.log(remoteMessage)
      console.log(remoteMessage != null)
      if (remoteMessage !== null) {
        console.log('entrou')
        navigate('Notification', { screen: 'NotificationSpecific', data: remoteMessage })
      }
    })
  }, [])

  return !isAuth ? <SignInStackNavigator /> : <AuthDrawerNavigator />
}

export default Component
