import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BackOrMenuButton from '../components/drawer/BackOrMenuButton'
import GoogleMapsScreen from '../screens/MapsScreen'
import { colors } from '../ui'

const HomeStackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white,
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen
        name='Maps'
        component={GoogleMapsScreen}
        options={{
          title: 'Maps',
          headerLeft: () => <BackOrMenuButton navigation={navigation} />
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator