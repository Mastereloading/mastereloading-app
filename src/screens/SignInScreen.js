import React, { useState } from "react";
import { Linking } from 'react-native';
import { Box, Text, colors } from '../ui';

import LoginAccount from '../components/LoginAccount'
import CreateAccount from '../components/CreateAccount'

const SignScreen = () => {
  const [LoginOrCreateAccount, setLoginOrCreateAccount] = useState(0)

  return (
    <Box flex background={colors.primary} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.secondary, fontSize: 30 }}>
        Mastereloading
      </Text>
      {
        LoginOrCreateAccount === 0
          ? <LoginAccount setLoginOrCreateAccount={setLoginOrCreateAccount} />
          : <CreateAccount setLoginOrCreateAccount={setLoginOrCreateAccount} />
      }
      <Text
        onPress={() => Linking.openURL('https://github.com/Mastereloading')}
        style={{
          position: 'absolute',
          color: colors.tertiary,
          textDecorationLine: 'underline',
          fontSize: 18,
          bottom: '4%'
        }}
      >
        Guilherme Oliveira
      </Text>
    </Box>
  )
}

export default SignScreen
