import React from 'react'
import {Text as RNText} from 'react-native'
import { colors } from './index'

const Text = ({children, style, background, ...props}) => {

  const baseStyle = {
    fontWeight: 'bold',
    color: style && style.color || colors.black,
    textAlign: style && style.textAlign || 'left',
    fontSize: style && style.fontSize || 20,
  }

  return (
    <RNText style={[baseStyle, style]} {...props}>
      {children}
    </RNText>
  )
}

export default Text
