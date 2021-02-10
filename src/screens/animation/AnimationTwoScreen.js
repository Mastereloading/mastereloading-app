import React, { useRef } from 'react'
import { Animated } from 'react-native'
import { Box, colors, Icons } from '../../ui'

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
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        style={{
          width: 125,
          height: 125,
          backgroundColor: colors.secondary,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          style={{
            width: 100,
            height: 100,
            backgroundColor: colors.primary,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            style={{
              width: 75,
              height: 75,
              backgroundColor: colors.tertiary,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Icons.Bluetooth />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AnimationOneScreen
