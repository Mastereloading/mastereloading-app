import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';

const ProfileStackNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName='Profile'
      // screenOptions={{
      //   headerShown: false
      // }}
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
