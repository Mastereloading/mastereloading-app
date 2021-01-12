import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContentComponent from '../components/drawer/DrawerContentComponent';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import ReduxStackNavigator from './ReduxStackNavigator';
import NotificationStackNavigator from './NotificationStackNavigator';

import { colors, Icons } from '../ui';

const AuthDrawerNavigator = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      drawerContent={props => <DrawerContentComponent props={props} />}
    >
      <Drawer.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          drawerLabel: 'Tela Principal',
          drawerIcon: () => <Icons.Store color={colors.primary} style={{ margin: 0, marginLeft: 15 }} />
        }}
      />
      <Drawer.Screen
        name='User'
        component={ProfileStackNavigator}
        options={{
          drawerLabel: 'Usuário',
          drawerIcon: () => <Icons.User color={colors.primary} style={{ margin: 0, marginLeft: 15 }} />
        }}
      />
      <Drawer.Screen
        name='Redux'
        component={ReduxStackNavigator}
        options={{
          drawerLabel: 'Testes Redux',
          drawerIcon: () => <Icons.Info color={colors.primary} style={{ margin: 0, marginLeft: 15 }} />
        }}
      />
      <Drawer.Screen
        name='Notification'
        component={NotificationStackNavigator}
        options={{
          drawerLabel: 'Notificação',
          drawerIcon: () => <Icons.Notification color={colors.primary} style={{ margin: 0, marginLeft: 15 }} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default AuthDrawerNavigator
