import React, { useState } from "react";
import { View, Text, Linking } from 'react-native';
import { colors } from '../ui';

import LoginAccount from '../components/LoginAccount'
import CreateAccount from '../components/CreateAccount'

const SignScreen = () => {
  const [LoginOrCreateAccount, setLoginOrCreateAccount] = useState(0)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
      }}
    >
      <Text
        style={{
          color: colors.secondary,
          fontWeight: 'bold',
          fontSize: 30
        }}
      >
        Mastereloading
      </Text>
      {
        LoginOrCreateAccount === 0
          ? <LoginAccount setLoginOrCreateAccount={setLoginOrCreateAccount} />
          : <CreateAccount setLoginOrCreateAccount={setLoginOrCreateAccount} />
      }
      <Text
        style={{
          position: 'absolute',
          color: colors.tertiary,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          fontSize: 18,
          bottom: '4%',
        }}
        onPress={() => Linking.openURL('https://github.com/Mastereloading')}
      >
        Guilherme Oliveira
      </Text>
    </View>
  )
}

export default SignScreen
