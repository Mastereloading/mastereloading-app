import React from 'react'

import { colors, Box, Text, UserAvatar } from '../../ui'

const DrawerHeader = () => {
  return (
    <Box style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 10 }}>
      <Box style={{ margin: 10 }}>
        <UserAvatar source={require('../../assets/adalovelace.jpg')} />
      </Box>
      <Box flex style={{ alignItems: 'center' }}>
        <Text>
          Guilherme
        </Text>
        <Text style={{ color: colors.primary , fontSize: 10 }}>
          guilherme-lamon@hotmail.com
        </Text>
      </Box>
    </Box>
  )
}

export default DrawerHeader
