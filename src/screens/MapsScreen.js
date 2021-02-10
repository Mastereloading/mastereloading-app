import React, { useState } from 'react'
import { Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Box, Text, colors } from '../ui'

const HomeScreen = () => {
  const [position, setPosition] = useState({
    latitude: -23.78825,
    longitude: -46.4324,
    latitudeDelta: 0.200,
    longitudeDelta: 0.200
  })

  return (
    <Box flex>
      <MapView
        region={position}
        key='AIzaSyDN6qbcIo1JMUrbpe3-XjMh9LAo_hiMhl4'
        showsUserLocation={true}
        stopPropagation={true}
        initialRegion={{
          latitude: -23.6541319,
          longitude: -46.5470885,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Marker
          title='Santo André'
          description='Uma boa cidade...'
          rotation={25}
          isPreselected={true}
          coordinate={{ latitude: -23.6541319, longitude: -46.5470885 }}
          onPress={() => Alert.alert('Santo André')}
        />
        <Marker
          title='Acra'
          description='Uma boa cidade?'
          rotation={25}
          isPreselected={true}
          coordinate={{ latitude: 5.6541319, longitude: -0.5470885 }}
        />
      </MapView >
      <Box
        style={{
          borderWidth: 2,
          borderColor: colors.tertiary,
          backgroundColor: colors.white,
          borderRadius: 20,
          width: '80%',
          height: '12%',
          position: 'absolute',
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: '145%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            color: colors.primary
          }}
        >
          Santo André
        </Text>
      </Box>
    </Box>
  )
}

export default HomeScreen

{/* <MapView
style={styles.map}
region={position}
onPress={e =>
  setPosition({
    ...position,
    latitude: e.nativeEvent.coordinate.latitude,
    longitude: e.nativeEvent.coordinate.longitude,
  })
}>
<Marker
  coordinate={position}
  title={'Marcador'}
  description={'Testando o marcador no mapa'}
/>
</MapView>   */}