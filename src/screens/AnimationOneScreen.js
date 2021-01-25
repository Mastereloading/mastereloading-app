import React, { useRef } from 'react'
import { Animated } from 'react-native'

import { Box, Text, Button } from '../ui'

// https://pt-br.reactjs.org/docs/refs-and-the-dom.html

const AnimationOneScreen = () => {
  const width = useRef(new Animated.Value(50)).current

  const openView = () => {
    return Animated.timing(width, {
      toValue: 250,
      duration: 2000,
      useNativeDriver: false
    }).start()
  }

  const closeView = () => {
    return Animated.timing(width, {
      toValue: 50,
      duration: 2000,
      useNativeDriver: false
    }).start()
  }

  return (
    <Box flex
      style={{
        margin: 25,
        alignItems: 'center'
      }}
    >
      <Text>Teste</Text>
      <Animated.View
        style={{
          width: width,
          height: 50,
          borderWidth: 2,
          backgroundColor: '#FF0000',
          alignItems: 'center'
        }}
      >
        <Text>View</Text>
      </Animated.View>
      <Box flex style={{ flexDirection: 'row'}}>
        <Button
          title='Open'
          fontSize={20}
          style={{
            width: 80,
            height: 80
          }}
          onPress={() => openView()}
        />
        <Button
          title='Close'
          fontSize={20}
          style={{
            width: 80,
            height: 80
          }}
          onPress={() => closeView()}
        />
      </Box>
    </Box>
  )
}

export default AnimationOneScreen
