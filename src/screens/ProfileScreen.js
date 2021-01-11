import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Box } from '../ui'

import { getUser } from '../lib/firestore'
import { colors, Button, UserAvatar } from '../ui'

const ProfileScreen = ({ navigation }) => {
  const userData = getUser()

  console.log(userData.uid)

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
        <Box flex
          style={{
            margin: 10
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center'

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris. Id donec ultrices tincidunt arcu non sodales. Volutpat ac tincidunt vitae semper. Tellus pellentesque eu tincidunt tortor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. In vitae turpis massa sed elementum tempus egestas. Massa placerat duis ultricies lacus sed. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris. Id donec ultrices tincidunt arcu non sodales. Volutpat ac tincidunt vitae semper. Tellus pellentesque eu tincidunt tortor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. In vitae turpis massa sed elementum tempus egestas. Massa placerat duis ultricies lacus sed. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
          </Text>
        </Box>
      </ScrollView>
      <Button
        title='Profile Options'
        style={{
          position: 'absolute',
          padding: 30,
          top: '82%',
          left: '50%',
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
