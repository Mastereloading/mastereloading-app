import React from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { colors, Box, Text } from '../ui'

const HomeScreen = (props) => {
  return (
    <Box flex background style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../assets/mastereloading.png')}
        style={{
          width: 200,
          height: 200
        }}
      />
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
