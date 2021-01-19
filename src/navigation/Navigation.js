import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationComponent from './NavigationComponent'
import { navigationRef } from './RootNavigation'

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationComponent />
    </NavigationContainer>
  )
}

export default Navigation
