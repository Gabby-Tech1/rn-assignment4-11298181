import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Facebook from '../assets/facebook.png'
import Google from '../assets/google.png'
import Apple from '../assets/apple.png'

const companyImages = {
    Facebook: Facebook,
    Google: Google,
    Apple: Apple,
};

const JobCards = ({jobData}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', marginTop: 20, }}>
    {
        jobData.map((item) => {
            return (
                <View style={[{backgroundColor: item.backgroundColor}, styles.container]} key={item.id}>
                <View style={styles.header}>
                    <Image source={companyImages[item.Image]} style={styles.logo}/>
                    <View style={{display: 'flex', flexDirection: "column", gap: 2}}>
                        <Text style={{color: 'white', fontWeight: '700', fontSize: 16}}>{item.title}</Text>
                        <Text style={{color: 'white'}}>{item.company}</Text>
                    </View>
                </View>
                <View style={{display: 'flex', flexDirection: "row-reverse", justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 50}}>
                    <Text style={{color: 'white'}}>{item.location}</Text>
                    <Text style={{color: 'white'}}>${item.salary}</Text>
                </View>
                </View>
            )
        })
        }
    </View>
    
  )
}

export default JobCards

const styles = StyleSheet.create({
    container: {
        display: "flex",
        borderRadius: 10,
        width: 250,
        height: 160,
        marginHorizontal: 10
    },
    logo: {
        width: 70,
        height: 70,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    }
})