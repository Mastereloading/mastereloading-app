import React, { useState } from 'react'
import { View } from 'react-native'

import { colors, TextInput, Button } from '../ui'

const LoginAccount = ({ setLoginOrCreateAccount }) => {
  console.log(setLoginOrCreateAccount)
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
          style={{
            margin: 2
          }}
          title='Login'
          onPress={() => console.log('Logar Conta Aqui...')}
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
        onPress={() => console.log('Logar Conta Google Aqui...')}
      />
    </View>
  )
}

export default LoginAccount
