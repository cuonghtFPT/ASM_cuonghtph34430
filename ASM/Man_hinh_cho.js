import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Man_hinh_cho = (props) => {
   const {navigation} = props;
  const Click = () => {
    navigation.navigate('Login');
  }
  return (
    <View>
      <Image style={styles.imagge} source={require('./images/market.png')}/>
      <Pressable onPress={Click} style={styles.pressAble}>
         <Text style={styles.textItem}>Continue</Text>
      </Pressable>
    </View>
  )
}

export default Man_hinh_cho

const styles = StyleSheet.create({
   imagge: {
      width: 185,
      height:185,
      margin: 120,
      marginTop: 250
   },
   pressAble: {
      backgroundColor: '#FF6600',
      height: 50,
      width: 300,
      borderRadius: 20,
      margin: 55,
      marginTop: 0
   },
   textItem: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 115,
      paddingTop: 9
   }
})