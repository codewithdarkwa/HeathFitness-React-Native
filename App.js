import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import WorkoutCard from './components/WorkoutCard';
import BottomTabs from './components/BottomTabs';

export default function App() {

  const newReleases = [
    {id:1, image: require('./assets/image1.jpeg')},
    {id:2, image: require('./assets/image2.jpeg')},
    {id:3, image: require('./assets/image3.jpg')},
  ];
  const mostPopular = [
    {id:4, image: require('./assets/image4.jpeg')},
    {id:5, image: require('./assets/image5.jpeg')},
    {id:6, image: require('./assets/image1.jpeg')},
  ];


  return (
    <SafeAreaView style={{backgroundColor:"black", flex:1}}>
      
      <Input 
       inputContainerStyle ={{
        borderColor: "white",
        borderRadius:20,
        backgroundColor: "#121212",
        paddingHorizontal:10,
        borderBottomWidth: 0
       }}

       leftIcon={ <Icon name='search' type='ionicon' color='grey' size={20}/>}
       placeholder='What are you looking for?'
      
      />

      <View style={{
        flexDirection: "row",
        justifyContent:"space-between",
        padding:10
      }}>
        <Text style={{color:'white'}}>New Releases</Text>
        <Text style={{color:'grey'}}>View all</Text>
      </View>

      <View style ={{height:20}}/>

      <ScrollView horizontal = {true}>
        <View style={{flexDirection:"row"}}>
          {
            newReleases.map((workout)=>(
              <WorkoutCard key={workout.id} image={workout.image}/>
            ))
          }
        </View>
      </ScrollView>
      
      <View style={{
        flexDirection: "row",
        justifyContent:"space-between",
        padding:10
      }}>
        <Text style={{color:'white'}}>Most Popular</Text>
        <Text style={{color:'grey'}}>View all</Text>
      </View>

      <View style ={{height:20}}/>
      <ScrollView horizontal = {true}>
        <View style={{flexDirection:"row"}}>
          {
            mostPopular.map((workout)=>(
              <WorkoutCard key={workout.id} image={workout.image}/>
            ))
          }
        </View>
      </ScrollView>
       <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
