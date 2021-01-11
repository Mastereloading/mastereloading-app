import React from 'react'
import { connect } from 'react-redux'
import { colors, Box, Text, Button, Icons } from '../ui'

const HomeScreen = (props) => {
  return (
    <Box flex background style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Icons.Menu />
      <Text>
        {props.welcomeMessage}
      </Text>
      <Button
        title='Pop-Up'
        style={{
          padding: 30,
          borderColor: colors.tertiary,
          backgroundColor: colors.primary,
          color: colors.secondary
        }}
        onPress={() => console.log('Pop-Up')}
      />
    </Box>
  )
}

const mapStateToProps = state => ({
  welcomeMessage: state.changeTextReducer.text
})

export default connect(mapStateToProps)(HomeScreen)
