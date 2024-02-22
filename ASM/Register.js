import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React,{useState} from 'react'

const Register = (props) => {
  const {navigation} = props;
  const Click = () => {
    navigation.navigate('Home');
  }
  
  return (
    <View style={styles.container}>
      <Pressable style={styles.textContinue}>
      <Text style={styles.text}>Register</Text>
      </Pressable>
      <Text>UserName</Text>
      <TextInput style={styles.textInput}/>
      <Text>PassWord</Text>
      <TextInput style={styles.textInput}/>
      <Pressable style={styles.buttonLogin} onPress={Click}>
        <Text style={styles.textLogin}>Register</Text>
      </Pressable>
      <Pressable style={styles.textContinue}>
        <Text>or continue with</Text>
      </Pressable>
     <View style={[styles.viewRemember, {justifyContent:'space-between'},{marginTop:30}]}>
     <Pressable style={styles.buttonSocial}>
        <Image style={styles.imgSocial} source={require('./images/Icon.png')}/>
        <Text>Facebook</Text>
      </Pressable>

      <Pressable style={styles.buttonSocial}>
        <Image style={styles.imgSocial} source={require('./images/gg.png')}/>
        <Text>Google</Text>
      </Pressable>
     </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginStart:10,
    marginEnd:10,
    flexDirection:'column',
    justifyContent: 'center',
  },
  textLogin: {
    justifyContent: 'center'
  },
  text:{
    fontFamily:'Popins',
    fontSize:40,
    fontWeight: 'bold',
    color:'blue',
    justifyContent:'center'
  },
  textInput: {
    height:48,
    borderRadius:10,
    borderWidth:1,
    marginTop:4,
  },
  viewRemember: {
    flexDirection: 'row',
    marginTop:10,
  },
  buttonLogin: {
    height:48,
    backgroundColor:'#1877F2',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 15,
  },
  textLogin: {
    color:'#FFFFFF',
    fontSize:20,
    fontWeight:'bold',
  },
  textContinue: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop:10
  },
  imgSocial: {
    width: 21,
    height : 21,
    marginEnd: 10
  },
  buttonSocial: {
    flexDirection: 'row',
    width: 174,
    height: 48,
    backgroundColor: '#EEF1F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
})