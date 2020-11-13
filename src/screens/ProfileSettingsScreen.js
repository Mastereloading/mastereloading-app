import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../ui'

const ProfileSettingsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>
        Profile Settings
      </Text>
    </View>
  )
}

export default ProfileSettingsScreen
