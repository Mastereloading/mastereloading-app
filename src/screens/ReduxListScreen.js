import React from 'react'
import { colors, Box, Button } from '../ui'

const ReactListScreen = ({ navigation }) => {
  return (
    <Box flex flexDirection='column'>
      <Button
        title='React Counter - Teste 1'
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
        title='React Input - Teste 2'
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
    </Box>
  )
}

export default ReactListScreen
