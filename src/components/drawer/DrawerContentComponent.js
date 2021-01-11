import React from 'react'
import { Alert } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import DrawerHeader from './DrawerHeader';
import { logoutUser } from '../../lib/firestore';
import { colors, Icons } from '../../ui';

const DrawerContentComponent = ({ props }) => {
  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: colors.white
      }}
      {...props}
    >
      <DrawerHeader />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          Alert.alert(
            "Deslogar",
            "Tem certeza que deseja sair?",
            [
              {
                text: "Sair",
                onPress: () => logoutUser()
              },
              {
                text: "Continuar"
              }
            ],
            { cancelable: true }
          )
        }}
        style={{
          backgroundColor: colors.back
        }}
        icon={() => <Icons.Exit color={colors.primary} style={{ margin: 0, marginLeft: 20 }} />}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerContentComponent
