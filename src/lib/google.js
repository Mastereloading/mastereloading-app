// import { useCallback } from 'react'
// import auth from '@react-native-firebase/auth'
// import {GoogleSignin} from '@react-native-community/google-signin'


// import app from '@react-native-firebase/app'


// export const onGoogleButtonPress = useCallback(async () => {
//   try {
//     const data = await GoogleSignin.signIn()

//     const credential = auth.GoogleAuthProvider.credential(
//       data.idToken,
//       data.accessToken
//     )

//     await auth().signInWithCredential(credential)
//   } catch (e) {
//     alert({e})
//   }
// }, [])
