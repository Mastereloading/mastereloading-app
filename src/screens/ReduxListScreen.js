import React from 'react'
import { View } from 'react-native'
import { colors, Button } from '../ui'

const ReactListScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Button
        title='ReactCounter - Teste 1'
        style={{
          padding: 10,
          borderWidth: 2,
          backgroundColor: colors.secondary,
          color: colors.primary,
          borderColor: colors.tertiary
        }}
        onPress={() => navigation.navigate('ReduxCounter')}
      />
      <Button
        title='ReactInput - Teste 2'
        style={{
          padding: 10,
          borderWidth: 2,
          backgroundColor: colors.secondary,
          color: colors.primary,
          borderColor: colors.tertiary
        }}
        onPress={() => navigation.navigate('ReduxInput')}
      />
      <Button
        title='React - Teste 3'
        style={{
          padding: 10,
          borderWidth: 2,
          backgroundColor: colors.secondary,
          color: colors.primary,
          borderColor: colors.tertiary
        }}
        onPress={() => alert('Teste 3 aqui...')}
      />
    </View>
  )
}

export default ReactListScreen
