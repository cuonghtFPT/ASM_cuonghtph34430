import { Pressable, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native'
import React,{useState} from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
  const {navigation} = props;
  const Click = () => {
    navigation.navigate('Register');
  }

  const [username, setusername] = useState("");
  const [passwd, setpasswd] = useState("");
  const doLogin = () => {
    if (username.length === 0) {
      Alert.alert("Chưa nhập Username");
      return;
    }

    if (passwd.length === 0) {
      Alert.alert("Chưa nhập Password");
      return;
    }

    let url_check_login = "http://10.24.32.155:3000/tb_users?username=" + username;
    fetch(url_check_login)
      .then((res) => res.json())
      .then(async (res_login) => {
        if (res_login.length !== 1) {
          Alert.alert("Sai username hoặc lỗi trùng lặp dữ liệu");
          return;
        } else {
          let objU = res_login[0];
          if (objU.passwd !== passwd) {
            Alert.alert("Sai password");
            return;
          } else {
            try {
              await AsyncStorage.setItem('loginInfo', JSON.stringify(objU));
              props.navigation.navigate('Home'); // Corrected navigation prop usage
            } catch (e) {
              // saving error
              console.log(e);
            }
          }
        }
      });
  };
  
  return (
    <View style={styles.container}>
      <Image style={styles.imgTet} source={require('./images/tet.jpg')}/>
      <Pressable style={styles.textContinue}>
      <Text style={styles.text}>Login</Text>
      </Pressable>
      <Text>UserName</Text>
      <TextInput placeholder='Nhập username' onChangeText={(txt) => {
        setusername(txt)
      }} style={styles.textInput}/>
      <Text>PassWord</Text>
      <TextInput placeholder='Nhập password' onChangeText={(txt) => {
        setpasswd(txt)
      }} textContentType="password" secureTextEntry={true} style={styles.textInput}/>
      <View style={[styles.viewRemember,{justifyContent:'space-between'}]}>
        <View style={styles.viewRemember}>
        <BouncyCheckbox 
        size={25}
        fillColor="blue"
        marginTop={5}
        />
        <Text style={{marginTop: 5}}>Remember me</Text>
        </View>
        <Text style={{marginTop:15}}>Forgot the password?</Text>
      </View>
      <Pressable onPress={doLogin} style={styles.buttonLogin} >
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <Pressable style={styles.textContinue}>
        <Text>or continue with?</Text>
        <Text onPress={Click} style={styles.textRegister}>Register</Text>
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

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginStart:10,
    marginEnd:10,
    flexDirection:'column',
    justifyContent: 'center',
  },
  textRegister: {
    color:'blue',
    fontSize:15,
    fontWeight:'bold',
    marginLeft: 20
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
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop:10,
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
  },
  imgTet: {
    width: 150,
    height: 120,
  }
})