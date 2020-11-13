import React from "react";
import { View, Text, Linking } from 'react-native';
import { loginUser } from "../lib/firestore";
import { colors, Button } from '../ui';

import { onlyGetUser } from '../lib/firestore';

const SignScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
      }}
    >
      <Text
        style={{
          color: colors.secondary,
          fontWeight: 'bold',
          fontSize: 30
        }}
      >
        Mastereloading
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: colors.secondary,
            fontWeight: 'bold',
            fontSize: 15
          }}
        >
          Login
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.primary,
          justifyContent: 'center'
        }}
      >
        <Button
          style={{
            margin: 3
          }}
          title='Login Google'
          onPress={() => loginUser()}
        />
        <Button
          style={{
            margin: 3
          }}
          title='aaa'
          onPress={() => console.log(onlyGetUser)}
        />
      </View>
      <Text
        style={{
          position: 'absolute',
          color: colors.tertiary,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          fontSize: 18,
          bottom: '4%',
        }}
        onPress={() => Linking.openURL('https://github.com/Mastereloading')}
      >
        Guilherme Oliveira
      </Text>
    </View>
  )
}

export default SignScreen
