import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icons } from '../../ui'

const BackOrMenuButton = ({ navigation, backButton }) => {
  return !backButton
    ? (
      <TouchableOpacity
        onPress={navigation.openDrawer}
      >
        <Icons.Menu />
      </TouchableOpacity>
    )
    : (
      <TouchableOpacity
        onPress={() => navigation.navigate(backButton)}
      >
        <Icons.Back />
      </TouchableOpacity>
    )
}

export default BackOrMenuButton
