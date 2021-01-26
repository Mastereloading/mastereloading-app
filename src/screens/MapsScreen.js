import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Box, Text, colors } from '../ui'
// import { View, Text } from 'react-native'

const HomeScreen = () => {
  return (
    <Box flex>
      <MapView
        key='AIzaSyDN6qbcIo1JMUrbpe3-XjMh9LAo_hiMhl4'
        showsUserLocation={true}
        // stopPropagation={true}
        // initialRegion={{
        //   latitude: -23.6541319,
        //   longitude: -46.5470885,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        style={{ flex: 1 }}
      >
        <Marker
          title='Santo André'
          description='Uma boa cidade...'
          rotation={25}
          isPreselected={true}
          coordinate={{ latitude: -23.6541319, longitude: -46.5470885 }}
        >
          <Box style={{ backgroundColor: "red", padding: 0 }}>
            <Text>Santo André</Text>
          </Box>
        </Marker>
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
