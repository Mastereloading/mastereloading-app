import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ReduxListScreen from '../screens/ReduxListScreen';
import ReduxCounterScreen from '../screens/ReduxCounterScreen';
import ReduxInputScreen from '../screens/ReduxInputScreen';
import { colors } from '../ui'

const ReduxStackNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName='ReduxList'
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
        name='ReduxList'
        component={ReduxListScreen}
      />
      <Stack.Screen
        name='ReduxCounter'
        component={ReduxCounterScreen}
      />
      <Stack.Screen
        name='ReduxInput'
        component={ReduxInputScreen}
      />
    </Stack.Navigator>
  )
}

export default ReduxStackNavigator
