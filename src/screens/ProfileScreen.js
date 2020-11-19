import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

import { getUser, logoutUser } from '../lib/firestore'

import { colors, Button, UserAvatar } from '../ui'

const ProfileScreen = ({ navigation }) => {
  const userData = getUser()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 15

          }}
        >
          <UserAvatar source={require('../assets/adalovelace.jpg')} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                color: colors.black,
                textAlign: 'center'
              }}
            >
              {userData.email}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: colors.primary
              }}
            >
              Desenvolvedor Front-End
            </Text>
          </View>
        </View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris. Id donec ultrices tincidunt arcu non sodales. Volutpat ac tincidunt vitae semper. Tellus pellentesque eu tincidunt tortor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. In vitae turpis massa sed elementum tempus egestas. Massa placerat duis ultricies lacus sed. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
          Amet purus gravida quis blandit turpis cursus in. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Egestas sed tempus urna et pharetra pharetra massa massa. Elementum nibh tellus molestie nunc. Id porta nibh venenatis cras sed felis eget velit. Interdum velit euismod in pellentesque massa placerat duis ultricies. Sagittis id consectetur purus ut faucibus pulvinar elementum. Ac odio tempor orci dapibus ultrices. Libero nunc consequat interdum varius sit amet mattis vulputate. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Venenatis lectus magna fringilla urna. Enim nec dui nunc mattis.
          Viverra mauris in aliquam sem. At lectus urna duis convallis convallis tellus. Blandit aliquam etiam erat velit scelerisque in. Lectus proin nibh nisl condimentum id. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Velit aliquet sagittis id consectetur purus ut. Scelerisque eu ultrices vitae auctor eu augue ut. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Scelerisque viverra mauris in aliquam. Sed euismod nisi porta lorem mollis aliquam. Neque ornare aenean euismod elementum nisi quis eleifend. Sapien faucibus et molestie ac. Tempor orci eu lobortis elementum nibh tellus.
          Malesuada proin libero nunc consequat interdum varius sit amet mattis. Mauris in aliquam sem fringilla ut morbi. Arcu odio ut sem nulla pharetra diam. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Senectus et netus et malesuada fames ac. Quam viverra orci sagittis eu. Nulla facilisi nullam vehicula ipsum. At erat pellentesque adipiscing commodo elit at imperdiet. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Pellentesque habitant morbi tristique senectus et netus. Tempor orci dapibus ultrices in iaculis nunc.
          At tellus at urna condimentum mattis pellentesque id nibh. Semper auctor neque vitae tempus quam pellentesque. At auctor urna nunc id cursus metus. Eget duis at tellus at urna condimentum mattis pellentesque. Adipiscing elit pellentesque habitant morbi tristique senectus et. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Non sodales neque sodales ut. Tempor nec feugiat nisl pretium fusce id velit. In nisl nisi scelerisque eu ultrices. Enim tortor at auctor urna nunc id cursus. Sit amet purus gravida quis blandit turpis. Cursus in hac habitasse platea dictumst quisque sagittis purus.
        </Text>
        <Button
          title='Logout'
          style={{
            padding: 30,
            backgroundColor: '#F00',
            color: colors.secondary
          }}
          onPress={() => logoutUser()}
        />
      </ScrollView>
      <Button
        title='Chat'
        style={{
          position: 'absolute',
          padding: 30,
          top: '85%',
          left: '70%',
          borderRadius: 38,
          borderColor: colors.tertiary,
          backgroundColor: colors.primary,
          color: colors.secondary
        }}
        onPress={() => navigation.navigate('ProfileSettings')}
      />
    </SafeAreaView>
  )
}

export default ProfileScreen
