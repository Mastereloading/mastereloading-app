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
          console.log(token) // ffQU1mQATGiI37q2WqDahQ:APA91bGbEdiA2wsLLs3DEss8HiNLj2XsAlgZz_K_lfwfgby8akVKgGTsocd26pQiu7rpbC5rdUJtqjWWO3lou90G2IkwEfXFT0NUfjlDpvWKMlI5zNGuqNgKTuU5ZLxFlTf5i_OgV6Tj
          Alert.alert(token)

          return '200'
        }}
      />
    </Box>
  )
}

export default NotificationLinkScreen
