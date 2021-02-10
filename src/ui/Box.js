import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { colors } from './index'

const Box = ({ children, style, onPress, flex, background, ...props }) => {
  const baseStyle = {
    flex: flex ? 1 : style?.flex || 0,
    backgroundColor: background === true ? colors.white : background || 'transparent',
    flexDirection: style && style.flexDirection || 'column',
    justifyContent: style && style.justifyContent || 'flex-start',
    alignItems: style && style.alignItems || 'stretch'
  }

  const Component = onPress ? TouchableOpacity : View

  return (
    <Component style={[baseStyle, style]} onPress={onPress} {...props}>
      {children}
    </Component>
  )
}

export default Box
