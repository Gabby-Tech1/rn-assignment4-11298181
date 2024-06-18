import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Profile from '../assets/profile.png'
import Search from '../assets/search.png'
import Filter from '../assets/filter.png'
import JobCards from '../components/JobCards'
import { ScrollView } from 'react-native-gesture-handler'
import PopularJobs from '../components/PopularJobs'


const jobData = [
    {
        id: "1",
        title: 'Software Engineer',
        company: 'Facebook',
        location: 'Toronto',
        salary: 100000,
        backgroundColor: 'blue',
        Image: "Facebook"
    },
    {
        id: "2",
        title: 'Web Developer',
        company: 'Amazon',
        location: 'Kasoa, Ofaakor',
        salary: 190000,
        backgroundColor:'green',
        Image: "Google"
    },
    {
        id: "3",
        title: 'QA Tester',
        company: 'Amalitech',
        location: 'Accra, Ghana', 
        salary: 17000,
        backgroundColor:'red',
        Image: "Apple"
    }
]

const Home = ({route}) => {
  const {name, email} = route.params;

  const renderJob = () => {
    return(
      <>
        <JobCards jobData={jobData}/>
      </>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FAFAFD"}}>
      <ScrollView>
      <View style={styles.container}>
        <View style={{display: "flex", flexDirection: "column"}}>
          <Text style={{fontSize: 24, fontWeight: "600"}}>{name}</Text>
          <Text style={{color: "gray", }}>{email}</Text>
        </View>
        <Image source={Profile} style={{width: 60, height: 60}}/>
      </View>
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={styles.search}>
          <Image source={Search} style={{width: 20, height: 20}}/>
          <TextInput placeholder='Search a job or position' style={{width: "100%"}}/>
        </View>
        <Image source={Filter} style={{width: 50, height: 50}}/>
      </View>
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 40 }}>
        <Text style={{fontSize: 18, fontWeight: "600"}}>Featured Jobs</Text>
        <Text style={{fontSize: 14, color: 'gary'}}>See All</Text>
      </View>
      <View>
        <FlatList
          data={jobData.slice(0,1)}
          renderItem={renderJob}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 40}}>
        <Text style={{fontSize: 18, fontWeight: "600"}}>Popular Jobs</Text>
        <Text style={{fontSize: 14, color: 'gary'}}>See All</Text>
      </View>
      <View>
        <PopularJobs/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: "#FAFAFD"
    },
    search: {
      display: "flex",
      flexDirection: "row",
      padding: 10,
      backgroundColor: "white",
      borderRadius: 10,
      borderWidth: 1,
      width: 320,
      marginVertical: 15,
      marginLeft: 15,
      gap: 8,
      alignItems: "center",
      borderColor: "#d3d3d3"
    },

})