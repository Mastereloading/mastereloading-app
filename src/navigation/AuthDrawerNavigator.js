import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import { colors } from '../ui';

const AuthDrawerNavigator = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // screenOptions={{
      //   headerShown: false
      // }}
      drawerType='front'
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
      <Drawer.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          drawerLabel: 'Tela Principal',
          // drawerIcon: Icons.Chat
        }}
      />
      <Drawer.Screen
        name='User'
        component={ProfileStackNavigator}
        options={{
          drawerLabel: 'Usuário',
          // drawerIcon: Icons.Chat
        }}
      />
    </Drawer.Navigator>
  )
}

export default AuthDrawerNavigator
