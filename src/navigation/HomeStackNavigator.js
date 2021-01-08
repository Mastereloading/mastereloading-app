import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BackOrMenuButton from '../components/drawer/BackOrMenuButton';

import HomeScreen from '../screens/HomeScreen';
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
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Tela Principal',
          headerLeft: () => <BackOrMenuButton navigation={navigation} />
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator