import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../ui'

import HomeScreen from '../screens/HomeScreen';

const HomeStackNavigator = () => {
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
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Tela Principal'
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator