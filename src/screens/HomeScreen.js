import React from 'react'
import { connect } from 'react-redux'
import { colors, Box, Text } from '../ui'

const HomeScreen = (props) => {
  return (
    <Box flex background style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          textAlign: 'center'
        }}
      >
        {props.welcomeMessage}
      </Text>
      <Text
        style={{
          color: colors.primary,
          fontSize: 12,
          textAlign: 'center'
        }}
      >
        (Altere o texto acima editando o exercício "Redux - React Input")
      </Text>
    </Box>
  )
}

const mapStateToProps = state => ({
  welcomeMessage: state.changeTextReducer.text
})

export default connect(mapStateToProps)(HomeScreen)
