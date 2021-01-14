import React, { useState } from 'react'
import { Image, Linking } from 'react-native'
import { Box, Text, colors } from '../ui'

import LoginAccount from '../components/LoginAccount'
import CreateAccount from '../components/CreateAccount'

const SignScreen = () => {
  const [LoginOrCreateAccount, setLoginOrCreateAccount] = useState(0)

  return (
    <Box flex background={colors.primary} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/mastereloading.png')}
        style={{
          borderWidth: 2,
          borderColor: colors.tertiary,
          width: 120,
          height: 120
        }}
      />
      <Text
        style={{
          color: colors.secondary,
          fontSize: 30,
          padding: 10
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
        onPress={() => Linking.openURL('https://github.com/Mastereloading')}
        style={{
          color: colors.tertiary,
          textDecorationLine: 'underline',
          fontSize: 18,
          top: '3%'
        }}
      >
        Guilherme Oliveira
      </Text>
    </Box>
  )
}

export default SignScreen
