/**
 * @format
 */

import {AppRegistry} from 'react-native'
import messaging from '@react-native-firebase/messaging'
import App from './src/App'
import {name as appName} from './app.json'

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Mensagem recebida enquanto o aplicativo está em background...!', remoteMessage)
})

AppRegistry.registerComponent(appName, () => App)
