import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const San_Pham = (props) => {
  const {navigation} = props;
  const Click = () => {
    navigation.navigate('Payment');
  }
  return (
   <ScrollView>
     <View>
      <View style={ styles.container}>
      <Image style={styles.image} source={require('./images/lote.jpg')}/>
      <View style={styles.viewContainer}>
        <Text style={styles.textTitle}>Capuchino</Text>
        <Image style={styles.icon} source={require('./images/coffee-beans.png')}/>
        <Image style={styles.icon1} source={require('./images/water-drop.png')}/>
      </View>

      <View style={styles.viewContainer}>
      <View style={styles.view}>
        <Image style={styles.icon2} source={require('./images/star.png')}/>
        <Text style={styles.text}>4.5</Text>
      </View>
        <Pressable style={styles.nen}>
          <Text style={styles.textM}>
            Medium 
          </Text>
      </Pressable>
      </View>

      <View style={styles.nen1}>
        <Text style={styles.textM}>Cappuccino coffee looks attractive because of
           the spongy and eye-catching layer of milk foam on top. 
           This is a drink originating from Italy.</Text>
      </View>

      <View>
        <Text style={styles.textML}>Size</Text>
        <View style={styles.view9}>
          <Pressable style={styles.pressText}>
          <Text style={styles.textSize}>S</Text>
          </Pressable>
          
          <Pressable style={styles.pressText}>
          <Text style={styles.textSize}>M</Text>
          </Pressable>

          <Pressable style={styles.pressText}>
          <Text style={styles.textSize}>L</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.view9}>
        <Text style={styles.textCard}>Price: $4.20</Text>
        <Pressable onPress={Click}  style={styles.nen5}>
          <Text style={styles.textM}>Art to Card</Text>
        </Pressable>
      </View>
      </View>
      
      <View style={ styles.container2}>
      <Image style={styles.image} source={require('./images/lote.jpg')}/>
      <View style={styles.viewContainer}>
        <Text style={styles.textTitle}>Capuchino</Text>
        <Image style={styles.icon} source={require('./images/coffee-beans.png')}/>
        <Image style={styles.icon1} source={require('./images/water-drop.png')}/>
      </View>

      <View style={styles.viewContainer}>
      <View style={styles.view}>
        <Image style={styles.icon2} source={require('./images/star.png')}/>
        <Text style={styles.text}>4.6</Text>
      </View>
        <Pressable style={styles.nen}>
          <Text style={styles.textM}>
            Medium 
          </Text>
      </Pressable>
      </View>

      <View style={styles.nen1}>
        <Text style={styles.textM}>Cappuccino coffee looks attractive because of
           the spongy and eye-catching layer of milk foam on top. 
           This is a drink originating from Italy.</Text>
      </View>

      <View>
        <Text style={styles.textML}>Size</Text>
        <View style={styles.view9}>
          <Pressable style={styles.pressText}>
          <Text style={styles.textSize}>S</Text>
          </Pressable>
          
          <Pressable style={styles.pressText}>
          <Text style={styles.textSize}>M</Text>
          </Pressable>

          <Pressable style={styles.pressText}>
          <Text style={styles.textSize}>L</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.view9}>
        <Text style={styles.textCard}>Price: $5.20</Text>
        <Pressable  style={styles.nen5}>
          <Text style={styles.textM}>Art to Card</Text>
        </Pressable>
      </View>
      </View>
      
      
    </View>
   </ScrollView>
  )
}

export default San_Pham

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '95%',
    marginLeft: 10,
    borderRadius: 20
  },
  container2: {
    borderWidth: 1,
    width: '95%',
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 30
  },
  textCard: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  image: {
    width:'90%',
    height: 250,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20
  },
  nen5: {
    width: 200,
    height: 50,
    backgroundColor: '#d0753d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginRight:0
  },

  viewContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  view: {
    flexDirection: 'row',
  },

  pressText: {
    width: 40,
    height: 20,
    backgroundColor: '#d0753d',
    borderRadius: 10,
  },

  textSize: {
    fontWeight: 'bold',
    color: '#0000000',
    marginLeft: 15,
  },
  view9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20
  },


  nen: {
    width: 100,
    height: 30,
    backgroundColor: '#d0753d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight:20
  },

  textTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  icon: {
    width:25,
    height:25,
    marginLeft: 120,
    borderRadius: 10,
    marginTop: 10
  },
  
  icon1: {
    width:25,
    height:25,
    marginRight: 20,
    marginTop: 10
  },
  icon2: {
    width:20,
    height:20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:10
  },
  textM: {
    fontSize:15,
    fontWeight:'bold'
  },
  textML: {
    fontSize:15,
    fontWeight:'bold',
    marginLeft: 180,
    marginTop:10
  },
  nen1: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 20
  }
})