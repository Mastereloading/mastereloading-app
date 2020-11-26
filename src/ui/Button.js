import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { colors } from './index'

const Button = ({ title, color, style, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        margin: 2,
        backgroundColor: colors.secondary,
        borderColor: colors.tertiary,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
        ...style
      }}
      { ...props }
    >
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: style.color || colors.primary,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
