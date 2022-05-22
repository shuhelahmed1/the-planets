import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import SafeViewAndroid from '../components/SafeViewAndroid'


export default function Details() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <PlanetHeader backBtn={true}/>
      <Text>Details</Text>
    </SafeAreaView>
  )
}