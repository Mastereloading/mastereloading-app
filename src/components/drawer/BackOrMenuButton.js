import React from 'react'
import { TouchableOpacity } from 'react-native'
import { colors, Icons } from '../../ui'

const BackOrMenuButton = ({ navigation, backButton }) => {
  return !backButton
    ? (
      <TouchableOpacity
        onPress={navigation.openDrawer}
      >
        <Icons.Menu style={{ color: colors.white, margin: 20 }} />
      </TouchableOpacity>
    )
    : (
      <TouchableOpacity
        onPress={() => navigation.navigate(backButton)}
      >
        <Icons.Back style={{ color: colors.white, margin: 20 }} />
      </TouchableOpacity>
    )
}

export default BackOrMenuButton
