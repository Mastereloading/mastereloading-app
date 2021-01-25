import React from 'react'
import { Box, Text } from '../ui'

const NotificationSpecificScreen = ({ ...props }) => {
  console.log(props.route.name)
  return (
    <Box flex background style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        Tela aberta pela notificação...
      </Text>
    </Box>
  )
}

export default NotificationSpecificScreen
