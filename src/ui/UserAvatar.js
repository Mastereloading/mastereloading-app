import React from 'react'
import { View, ImageBackground } from 'react-native'

import { colors } from './index'

const UserAvatar = ({ ...props }) => {
  return (
    <ImageBackground
      style={{
        width: 120,
        height: 100
      }}
      { ...props }
    >
      <View
        style={{
          width: 120,
          height: 100,
          borderWidth: 3,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 50,
          borderColor: colors.primary
        }}
      />
    </ImageBackground>
  )
}

export default UserAvatar
