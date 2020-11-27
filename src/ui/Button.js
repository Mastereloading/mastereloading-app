import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { colors } from './index'

const Button = ({ title, color, fontSize, style, ...props }) => {
  return (
    <TouchableOpacity
      style={{
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
          fontSize: fontSize,
          color: style.color || colors.primary,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
