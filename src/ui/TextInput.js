import React from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { colors } from './index'

const TextInput = ({ value, onChangeText, placeholder, style, ...props }) => {
  return (
    <RNTextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.primaryTranslucent}
      style={{
        height: 50,
        width: 250,
        margin: 2,
        borderWidth: 2,
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        textAlign: 'center',
        color: colors.primary,
        backgroundColor: colors.secondary,
        borderColor: colors.tertiary,
        ...style
      }}
      {...props}
    />
  )
}

export default TextInput
