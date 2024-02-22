import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

const Setting_person = () => {

  const [name, setName] = useState('');
    const [sdt, setSdt] = useState('');
    const [diachi, setDiachi] = useState('');
    const [noidung, setNoidung] = useState('');

    const validateAndSaveProduct = () => {
      // Kiểm tra tính hợp lệ của dữ liệu trước khi thêm
      if (!name || !sdt || !diachi || !noidung) {
          Alert.alert("Vui lòng điền đầy đủ thông tin.");
          return;
      }

      // Tạo đối tượng dữ liệu
      let objSP = { name, sdt,diachi, noidung };
      let url_api = 'http://10.24.32.155:3004/lien_he';

      // Gửi yêu cầu POST
      fetch(url_api, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(objSP),
      }).then((res) => {
          if (res.status === 201) {
              Alert.alert("Thêm thành công");
          }
      }).catch((ex) => {
          console.log(ex);
      });
  }
  return (
    <View>
      <Image style={styles.image} source={require('./images/Intersect.png')}/>
      <TextInput style={styles.textInput} placeholder="Name" onChangeText={(txt) => { setName(txt) }}/>
      <TextInput style={styles.textInput} placeholder="SDT" onChangeText={(txt) => { setSdt(txt) }}/>
      <TextInput style={styles.textInput} placeholder="Diachi" onChangeText={(txt) => { setDiachi(txt) }}/>
      <TextInput style={styles.textInput} placeholder="Noidung" onChangeText={(txt) => { setNoidung(txt) }} />
      <Pressable style={styles.pressAble} onPress={validateAndSaveProduct}>
         <Text>Save</Text>
      </Pressable>
    </View>
  )
}

export default Setting_person

const styles = StyleSheet.create({
   image: {
      marginTop: 50,
      marginLeft: 130,
      marginBottom: 70
   },
   textInput: {
      height:48,
      borderRadius:10,
      borderWidth:1,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20
    },
    pressAble: {
      width: 334,
      height: 57,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#d3783c',
      borderRadius: 20,
      marginTop: 70,
      marginLeft: 40
    }
})