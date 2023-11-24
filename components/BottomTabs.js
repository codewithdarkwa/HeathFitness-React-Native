import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const BottomTabs = () => {

    const icons = [
        {
            icon: 'home',
            text:'home',
            color:'white',
        },
        {
            icon: 'search',
            text:'Discover',
            color:'grey',
        },
        {
            icon: 'bookmark-outline',
            text:'Saved',
            color:'grey',
        },
        {
            icon: 'location-pin',
            text:'Studio',
            color:'grey',
        },
    ];
  return (
    <View style= {{flexDirection:"row", margin:10, marginHorizontal:30, justifyContent:"space-between"}}>
      {
        icons.map((icon,i) => (
            <Icons key= {i} {...icon}/>
        ))
      }
    </View>
  )
}

const Icons = ({icon, text, color}) => (
    <TouchableOpacity >
        <View>
            <Icon 
             type='ionicons'
             color={color}
             name= {icon}
             size={25}
             style={{marginBottom:3, alignSelf: "center"}}
            />
            <Text style={{color: 'white'}}>{text}</Text>
        </View>
    </TouchableOpacity>
)

export default BottomTabs