import React from 'react'
import { View, Text } from 'react-native'

import { UserAvatar } from '../../ui'

const DrawerHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10
      }}
    >
      <View
        style={{
          margin: 10
        }}
      >
        <UserAvatar source={require('../../assets/adalovelace.jpg')} />
      </View>
      <View
        style={{
          flex: 1
        }}
      >
        <Text>OI</Text>
        <Text>tiweifhsdafhsdfjkl</Text>
      </View>
    </View>
  )
}

export default DrawerHeader
