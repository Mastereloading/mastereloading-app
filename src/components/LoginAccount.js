import React, { useState } from 'react'
import { View } from 'react-native'

import { loginUser } from '../lib/firestore'
import { colors, TextInput, Button } from '../ui'

const LoginAccount = ({ setLoginOrCreateAccount }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <TextInput
        value={loginData.email}
        onChangeText={value => setLoginData({
          ...loginData,
          email: value
        })}
        placeholder='Email...'
      />
      <TextInput
        value={loginData.password}
        onChangeText={value => setLoginData({
          ...loginData,
          password: value
        })}
        placeholder='Senha...'
        secureTextEntry={true}
      />
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <Button
          disabled={loginData.email != '' && loginData.password != '' ? false : true}
          style={{
            margin: 2,
            backgroundColor: loginData.email != '' && loginData.password != '' ? colors.secondary : colors.primaryTranslucent
          }}
          title='Login'
          
          onPress={() => loginUser(loginData.email, loginData.password)}
        />
        <Button
          style={{
            margin: 2
          }}
          title='Criar Conta'
          onPress={() => setLoginOrCreateAccount(1)}
        />
      </View>
      <Button
        style={{
          margin: 2
        }}
        title='Login Google'
        onPress={() => "200"} // {onGoogleButtonPress}
      />
    </View>
  )
}

export default LoginAccount
