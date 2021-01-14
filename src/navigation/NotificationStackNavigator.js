import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BackOrMenuButton from '../components/drawer/BackOrMenuButton'
import NotificationLinkScreen from '../screens/NotificationLinkScreen'
import NotificationSpecificScreen from '../screens/NotificationSpecificScreen'
import { colors } from '../ui'


const NotificationStackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName='NotificationLink'
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
        name='NotificationLink'
        component={NotificationLinkScreen}
        options={{
          title: 'Tela com Link',
          headerLeft: () => <BackOrMenuButton navigation={navigation} />
        }}
      />
      <Stack.Screen
        name='NotificationSpecific'
        component={NotificationSpecificScreen}
        options={{
          title: 'Tela Específica',
          headerLeft: () => <BackOrMenuButton navigation={navigation} backButton='NotificationLink' />
        }}
      />
    </Stack.Navigator>
  )
}

export default NotificationStackNavigator
