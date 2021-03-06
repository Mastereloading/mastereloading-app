import React from 'react'
import { colors, Box, Button } from '../../ui'

const AnimationListScreen = ({ navigation }) => {
  return (
    <Box flex flexDirection='column'>
      <Button
        title='Animação - Teste 1'
        style={{
          padding: 10,
          borderWidth: 2,
          backgroundColor: colors.secondary,
          color: colors.primary,
          borderColor: colors.tertiary
        }}
        onPress={() => navigation.navigate('AnimationOne')}
      />
      <Button
        title='Animação - Teste 2'
        style={{
          padding: 10,
          borderWidth: 2,
          backgroundColor: colors.secondary,
          color: colors.primary,
          borderColor: colors.tertiary
        }}
        onPress={() => navigation.navigate('AnimationTwo')}
      />
      <Button
        title='Animação 3...'
        style={{
          padding: 10,
          borderWidth: 2,
          backgroundColor: colors.secondary,
          color: colors.primary,
          borderColor: colors.tertiary
        }}
        onPress={() => alert('Animação 3 aqui...')}
      />
    </Box>
  )
}

export default AnimationListScreen
