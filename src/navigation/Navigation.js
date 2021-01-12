import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import SignInStackNavigator from './SignInStackNavigator'
import AuthDrawerNavigator from './AuthDrawerNavigator'
import { onUserChanged } from '../lib/firestore'
import { colors } from '../ui'

const Navigation = () => {
  const [isAuth, setIsAuth] = useState(
    onUserChanged((user) => {
      setIsAuth(user)
    })
  )

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      {
        !isAuth
          ? <SignInStackNavigator />
          : <AuthDrawerNavigator />
      }
    </NavigationContainer>
  )
}

export default Navigation
