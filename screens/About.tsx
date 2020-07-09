import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About about about</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})

export default About
