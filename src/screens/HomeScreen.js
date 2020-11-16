import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../ui'

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>
        HomeScreen
      </Text>
    </View>
  )
}

export default HomeScreen
