import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BackOrMenuButton from '../components/drawer/BackOrMenuButton'
import AnimationListScreen from '../screens/animation/AnimationListScreen'
import AnimationOneScreen from '../screens/animation/AnimationOneScreen'
import AnimationTwoScreen from '../screens/animation/AnimationTwoScreen'
import { colors } from '../ui'

const AnimationStackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName='AnimationList'
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
        name='AnimationList'
        component={AnimationListScreen}
        options={{
          title: 'Exercícios Animação',
          headerLeft: () => <BackOrMenuButton navigation={navigation} />
        }}
      />
      <Stack.Screen
        name='AnimationOne'
        component={AnimationOneScreen}
        options={{
          title: 'Animação 1',
          headerLeft: () => <BackOrMenuButton navigation={navigation} backButton='AnimationList' />
        }}
      />
      <Stack.Screen
        name='AnimationTwo'
        component={AnimationTwoScreen}
        options={{
          title: 'Animação 2',
          headerLeft: () => <BackOrMenuButton navigation={navigation} backButton='AnimationList' />
        }}
      />
    </Stack.Navigator>
  )
}

export default AnimationStackNavigator
