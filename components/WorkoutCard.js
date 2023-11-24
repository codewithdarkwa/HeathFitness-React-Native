
import { View, Text,Image } from 'react-native'
import React from 'react'

const WorkoutCard = ({image}) => {
  return (
    <View style={{padding:10}}>
      <Image 
      source={image}
      style={{width:160, height: 200, borderRadius: 12}}
      />
    </View>
  )
}

export default WorkoutCard