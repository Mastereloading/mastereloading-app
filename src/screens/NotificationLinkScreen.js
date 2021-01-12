import React, { useState, useEffect } from 'react'
import { Alert, Linking } from 'react-native'
import messaging from '@react-native-firebase/messaging'
import { Box, Text, Button, colors } from '../ui'

const NotificationLinkScreen = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    messaging().getToken().then(token => {
      return setToken(token)
    })

    messaging().onTokenRefresh(token => {
      return setToken(token)
    })
  }, [])

  return (
    <Box flex background style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Box
        style={{
          alignItems: 'center',
          paddingBottom: 15
        }}
      >
        <Text>
          Link para emitir notificação...
        </Text>
        <Text
          onPress={() => Linking.openURL('https://us-central1-mastereloading-database.cloudfunctions.net/mastereloadingSendNotification')}
          style={{
            color: colors.tertiary,
            textDecorationLine: 'underline',
            fontSize: 22
          }}
        >
          notification.com.br
        </Text>
      </Box>
      <Button
        title='Token do Dispositivo'
        style={{
          padding: 15,
          borderColor: colors.tertiary,
          backgroundColor: colors.primary,
          color: colors.secondary
        }}
        onPress={() => {
          Alert.alert(token) //eJ4ZUEmKRc25jmOKgRw3eA:APA91bG1X84GvJx8_IDZjSS28O1o5xYdfymA5a_j4p02iK9DtY1c9Qkg0rGkEhALLphEInE2OpDSStUb5Ch9c40yJiXo3dJrznLonujxQ3yHFOAzvBWi3aQl8RS9sIAb8Lqu4e9Tf01n

          return '200'
        }}
      />
    </Box>
  )
}

export default NotificationLinkScreen
