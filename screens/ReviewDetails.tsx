import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'

const ReviewDetails = ({ navigation }: any) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{ navigation.getParam('title') }</Text>
        <Text>{ navigation.getParam('body') }</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={require('../assets/rating-1.png')} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {}
})

export default ReviewDetails
