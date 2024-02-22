import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = (props) => {
   const {navigation} = props;
  const Click = () => {
    navigation.navigate('Setting_person');
  }

  const Click1 = () => {
   navigation.navigate('Login');
 }
  return (
    <View>
      <View style={styles.view}>
         <Image style={styles.image} source={require('./images/file.png')}/>
         <Text style={styles.textTitle}>History</Text>
      </View>

      <View>
        <Pressable onPress={Click} style={styles.view}>
        <Image style={styles.image} source={require('./images/user.png')}/>
         <Text style={styles.textTitle1}>Personal Detals</Text>
        </Pressable>
      </View>

      <View style={styles.view}>
         <Image style={styles.image} source={require('./images/maps-and-flags.png')}/>
         <Text style={styles.textTitle}>Addres</Text>
      </View>

      <View style={styles.view}>
         <Image style={styles.image} source={require('./images/info-button.png')}/>
         <Text style={styles.textTitle}>About</Text>
      </View>

      <View style={styles.view}>
         <Image style={styles.image} source={require('./images/credit-card.png')}/>
         <Text style={styles.textTitle}>Payment Method</Text>
      </View>

      <View >
         <Pressable onPress={Click1} style={styles.view}>
         <Image style={styles.image} source={require('./images/logout.png')}/>
         <Text style={styles.textTitle}>Log out</Text>
         </Pressable>
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
   container: {
      flexDirection:'column',
   },
   image: {
      width: 25,
      height:25,
      marginRight: 40,
      marginTop: 15,
      marginLeft: 12
   },

   view: {
      borderWidth:1,
      flexDirection: 'row',
      height: 60
   },

   textTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 15
   },
   textTitle1: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 15
   }
})

