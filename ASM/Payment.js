import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Payment = () => {
  return (
    <View>
      <View style={styles.container}>
         <Text style={styles.textTitle}>Credit Card</Text>
         <Image style={styles.image} source={require('./images/Group75.png')}/>
      </View>

      <View style={styles.container1}>
      <Image style={styles.image1} source={require('./images/Vector1.png')}/>
      <Text style={styles.textTitle1}>Wallet</Text>
      </View>

      <View style={styles.container1}>
      <Image style={styles.image1} source={require('./images/Group.png')}/>
      <Text style={styles.textTitle1}>Wallet</Text>
      </View>

      <View style={styles.container1}>
      <Image style={styles.image1} source={require('./images/Vector2.png')}/>
      <Text style={styles.textTitle1}>Wallet</Text>
      </View>

      <View style={styles.container1}>
      <Image style={styles.image1} source={require('./images/Group1.png')}/>
      <Text style={styles.textTitle1}>Wallet</Text>
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
   container: {
      borderWidth: 3,
      width: '95%',
      marginLeft: 10,
      borderRadius: 25
   },

   container1: {
      borderWidth: 3,
      marginLeft: 10,
      borderRadius: 25,
      marginTop: 20,
      marginRight: 15,
      flexDirection: 'row'
   },
   image: {
      marginLeft: 35,
      marginBottom: 30,
      marginTop: 20
   },

   image1: {
      marginLeft: 35,
      marginBottom: 10,
      marginTop: 10
   },

   textTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 35
   },
   textTitle1: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 45,
      marginTop: 5
   }
})