import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContentComponent from '../components/drawer/DrawerContentComponent';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import ReduxStackNavigator from './ReduxStackNavigator';

import { colors, Icons } from '../ui';

const AuthDrawerNavigator = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      // initialRouteName="Home"
      // screenOptions={{
      //   headerShown: false
      // }}
      drawerContent={props => <DrawerContentComponent props={props} />}
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
          drawerIcon: () => <Icons.Store />
        }}
      />
      <Drawer.Screen
        name='User'
        component={ProfileStackNavigator}
        options={{
          drawerLabel: 'Usuário',
          drawerIcon: () => <Icons.User />
        }}
      />
      <Drawer.Screen
        name='Redux'
        component={ReduxStackNavigator}
        options={{
          drawerLabel: 'Testes Redux',
          drawerIcon: () => <Icons.Info />
        }}
      />
    </Drawer.Navigator>
  )
}

export default AuthDrawerNavigator
