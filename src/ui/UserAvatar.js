import React from 'react'
import { Alert, ImageBackground } from 'react-native'

import { colors, Box } from './index'

const UserAvatar = ({ ...props }) => {
  return (
    <ImageBackground
      style={{
        width: 95,
        height: 75
      }}
      {...props}
    >
      <Box
        onPress={() => Alert.alert('Ada Lovelace')}
        style={{
          width: 95,
          height: 75,
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
