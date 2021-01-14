import React, { useState, useEffect, createRef } from 'react'
import { Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import messaging from '@react-native-firebase/messaging'
import SignInStackNavigator from './SignInStackNavigator'
import AuthDrawerNavigator from './AuthDrawerNavigator'
import { onUserChanged } from '../lib/firestore'

const Navigation = () => {
  const navigationRef = createRef()
  const [isAuth, setIsAuth] = useState(
    onUserChanged((user) => {
      setIsAuth(user)
    })
  )

  useEffect(() => {
    const unsubscribe = messaging().onMessage(remoteMessage => {
      Alert.alert(
        JSON.stringify(remoteMessage?.notification?.title),
        JSON.stringify(remoteMessage?.notification?.body)
      )
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Abriu o app do background...')
      console.log(JSON.stringify(remoteMessage?.notification?.title))
      // navigationRef.current?.navigate("NotificationSpecific")
    })

    messaging().getInitialNotification().then(remoteMessage => {
      console.log('Abriu o app que estava fechado...')
      console.log(JSON.stringify(remoteMessage?.notification?.title))
      // navigationRef.current?.navigate('NotificationSpecific')
    })
  }, [])

  return (
    <NavigationContainer ref={navigationRef}>
      {
        !isAuth
        ? <SignInStackNavigator />
        : <AuthDrawerNavigator />
      }
    </NavigationContainer>
  )
}

export default Navigation
