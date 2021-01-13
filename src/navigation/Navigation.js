import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import messaging from '@react-native-firebase/messaging'
import SignInStackNavigator from './SignInStackNavigator'
import AuthDrawerNavigator from './AuthDrawerNavigator'
import { onUserChanged } from '../lib/firestore'

const Navigation = () => {
  const [isAuth, setIsAuth] = useState(
    onUserChanged((user) => {
      setIsAuth(user)
    })
  )

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
      navigation.navigate(remoteMessage.data.screen)
    })

    messaging().getInitialNotification().then(remoteMessage => {
      navigation.navigate(remoteMessage.data.screen)
    })
  }, [])

  return (
    <NavigationContainer>
      {
        !isAuth
        ? <SignInStackNavigator />
        : <AuthDrawerNavigator />
      }
    </NavigationContainer>
  )
}

export default Navigation
