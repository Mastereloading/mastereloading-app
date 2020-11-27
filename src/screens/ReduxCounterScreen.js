import React from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as changeNumberActions from '../store/actions/changeNumberActions'
import { Button, colors} from '../ui'

const ReduxCounterScreen = (props) => {
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
        <Button
          title='-'
          fontSize={40}
          style={{
            width: 80
          }}
          onPress={() => props.subNumber()}
        />
        
        <Text
          style={{
            marginHorizontal: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 65,
            color: colors.primary
          }}
        >
          {props.number}
        </Text>
        <Button
          title='+'
          fontSize={40}
          style={{
            width: 80
          }}
          onPress={() => props.sumNumber()}
        />
      </View>
      <Button
          title='Resetar'
          fontSize={40}
          style={{
            width: '100%',
            color: colors.tertiary,
            borderColor: colors.tertiary,
            backgroundColor: colors.back
          }}
          onPress={() => props.defaultNumber()}
        />
    </View>
  )
}

const mapStateToProps = state => ({
  number: state.changeNumberReducer.number
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(changeNumberActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterScreen)
