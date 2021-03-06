import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../ui';

import BackOrMenuButton from '../components/drawer/BackOrMenuButton';

import ProfileScreen from '../screens/ProfileScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';

const ProfileStackNavigator = ({ navigation }) => {
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
        options={{
          title: 'Profile',
          headerLeft: () => <BackOrMenuButton navigation={navigation} />
        }}
      />
      <Stack.Screen
        name='ProfileSettings'
        component={ProfileSettingsScreen}
        options={{
          title: 'ProfileOptions',
          headerLeft: () => <BackOrMenuButton navigation={navigation} backButton='Profile' />
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator
