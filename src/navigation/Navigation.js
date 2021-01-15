import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Component from './NavigationComponent'
import { navigationRef } from './RootNavigation'

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Component />
    </NavigationContainer>
  )
}

export default Navigation
