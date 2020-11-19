import React, { useState } from 'react'
import { View } from 'react-native'
import { createUser } from '../lib/firestore'

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
          disabled={loginData.password === loginData.confirmPassword && loginData.password != '' ? false : true}
          style={{
            margin: 2,
            backgroundColor: loginData.password === loginData.confirmPassword && loginData.password != '' ? colors.secondary : colors.primaryTranslucent
          }}
          title='Criar'
          onPress={() => createUser(loginData.name, loginData.email, loginData.password)}
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
