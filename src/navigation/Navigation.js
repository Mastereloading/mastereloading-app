import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../ui';

import SignInStackNavigator from './SignInStackNavigator';
import AuthDrawerNavigator from './AuthDrawerNavigator';
import { onUserChanged } from '../lib/firestore';

const Navigation = () => {
  const [isAuth, setIsAuth] = useState(null)

  useEffect(() => {
    onUserChanged((user) => {
      setIsAuth(user)
    })
  }, [])

  return (
    !isAuth
    ?
    <NavigationContainer>
        <StatusBar backgroundColor={colors.primary} />
        <SignInStackNavigator />
    </NavigationContainer>
    :
    <NavigationContainer>
        <StatusBar backgroundColor={colors.primary} />
        <AuthDrawerNavigator />
    </NavigationContainer>
  )
}

export default Navigation
