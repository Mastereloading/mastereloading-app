import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as textChangeActions from '../store/actions/textChangeActions'
import { Button, colors, TextInput } from '../ui'

const ReactInputScreen = (props) => {
  const [textData, setTextData] = useState('')
  return (
    <View
      style={{
        flex: 1,
        margin: 25,
        alignItems: 'center'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20
        }}
      >
        <TextInput
          value={textData}
          onChangeText={value => setTextData(value)}
          placeholder='Escreva algo aqui...'
        />
        <Button
          title='Alterar'
          style={{
            color: colors.primary,
            width: 80
          }}
          onPress={() => {
            props.setText(textData)
            setTextData('')

            return '200'
          }}
        />
      </View>
      <Text
        style={{
          textDecorationLine: 'underline',
          fontWeight: 'bold',
          fontSize: 35,
          color: colors.primary
        }}
      >
        {props.text}
      </Text>
    </View>
  )
}

const mapStateToProps = state => ({
  text: state.textChangeReducer.text
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(textChangeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactInputScreen)
