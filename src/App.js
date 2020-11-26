/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import Navigation from './navigation/Navigation'
import store from './store'
import { colors } from './ui'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.tertiary} style='auto' />
      <Navigation />
    </Provider>
  )
}

export default App;
