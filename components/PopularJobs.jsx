import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Manager from '../assets/manager.png'
import JR from '../assets/jr.png'
import Facebook from '../assets/fb.png'

const positionData = [
    {
        position: "Jr Executive",
        company: "Burger King",
        location: "Toronto",
        salary: "80,000/y",
        image: Manager
    },
    {
        position: "Product Manager",
        company: "Beats",
        location: "California",
        salary: "80,000/y",
        image: JR
    },
    {
        position: "UI Designer",
        company: "Facebook",
        location: "Toronto",
        salary: "80,000/y",
        image: Facebook
    },
    {
        position: "Jr Executive",
        company: "Burger King",
        location: "Toronto",
        salary: "80,000/y",
        image: Manager
    },
    {
        position: "Product Manager",
        company: "Beats",
        location: "California",
        salary: "80,000/y",
        image: JR
    },
    {
        position: "Jr Executive",
        company: "Burger King",
        location: "Toronto",
        salary: "80,000/y",
        image: Facebook
    }
]
const PopularJobs = () => {
  return (
    <View style={{marginTop: 20, }}>
      {
        positionData.map((item, index) => {
          return (
            <View key={index} style={styles.card}>
                <View style={styles.ImageText}>
                    <Image source={item.image} style={{width: 50, height: 50}}/>
                    <View style={{display: 'flex', gap: 3}}>
                        <Text style={{fontWeight: '600'}}>{item.position}</Text>
                        <Text style={{color: "gray"}}>{item.company}</Text>
                    </View>
                </View>
                
                <View>
                    <Text>{item.location}</Text>
                    <Text style={{color: "gray"}}>${item.salary}</Text>
                </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default PopularJobs

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
    },
    ImageText: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }
})