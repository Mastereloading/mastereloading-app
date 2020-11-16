import React, { useState } from 'react'
import { View } from 'react-native'

import { colors, TextInput, Button } from '../ui'

const CreateAccount = ({ setLoginOrCreateAccount }) => {
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
        value={loginData.name}
        onChangeText={value => setLoginData({
          ...loginData,
          name: value
        })}
        placeholder='Nome...'
      />
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
      <TextInput
        value={loginData.confirmPassword}
        onChangeText={value => setLoginData({
          ...loginData,
          confirmPassword: value
        })}
        placeholder='Confirme a Senha...'
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
          title='Criar'
          onPress={() => console.log('Criar Conta Aqui...')}
        />
        <Button
          style={{
            margin: 2
          }}
          title='Voltar'
          onPress={() => setLoginOrCreateAccount(0)}
        />
      </View>
    </View>
  )
}

export default CreateAccount
