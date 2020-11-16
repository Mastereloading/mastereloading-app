import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../ui'

import ProfileScreen from '../screens/ProfileScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';

const ProfileStackNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName='Profile'
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
        name='Profile'
        component={ProfileScreen}
      />
      <Stack.Screen
        name='ProfileSettings'
        component={ProfileSettingsScreen}
      />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator
