import React, { useRef } from 'react'
import { View, Text, Animated } from 'react-native'

const AnimationOneScreen = () => {
  const width = useRef(new Animated.Value(50)).current

  Animated.timing(width, {
    toValue: 250,
    duration: 2000
  }).start()

  return (
    <View
      style={{
        flex: 1,
        margin: 25,
        alignItems: 'center'
      }}
    >
      <Text>
        Teste
      </Text>
      <Animated.View
        style={{
          width: width,
          height: 50,
          backgroundColor: '#FF0000'
        }}
      >
      </Animated.View>
    </View>
  )
}

export default AnimationOneScreen
