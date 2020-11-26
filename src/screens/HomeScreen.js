import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { colors } from '../ui'

const HomeScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>
        {props.welcomeMessage}
      </Text>
    </View>
  )
}

const mapStateToProps = state => ({
  welcomeMessage: state.textChangeReducer.text
})

export default connect(mapStateToProps)(HomeScreen)
