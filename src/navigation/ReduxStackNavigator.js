import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BackOrMenuButton from '../components/drawer/BackOrMenuButton'
import ReduxListScreen from '../screens/ReduxListScreen'
import ReduxCounterScreen from '../screens/ReduxCounterScreen'
import ReduxInputScreen from '../screens/ReduxInputScreen'
import { colors } from '../ui'

const ReduxStackNavigator = ({ navigation }) => {
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
        options={{
          title: 'Exercícios Redux',
          headerLeft: () => <BackOrMenuButton navigation={navigation} />
        }}
      />
      <Stack.Screen
        name='ReduxCounter'
        component={ReduxCounterScreen}
        options={{
          title: 'Redux - Contador',
          headerLeft: () => <BackOrMenuButton navigation={navigation} backButton='ReduxList' />
        }}
      />
      <Stack.Screen
        name='ReduxInput'
        component={ReduxInputScreen}
        options={{
          title: 'Redux - Input',
          headerLeft: () => <BackOrMenuButton navigation={navigation} backButton='ReduxList' />
        }}
      />
    </Stack.Navigator>
  )
}

export default ReduxStackNavigator
