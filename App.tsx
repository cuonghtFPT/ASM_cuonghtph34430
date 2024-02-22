import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './ASM/Home';
import Giohang from './ASM/Giohang';
import Favourite from './ASM/Favourite';
import History from './ASM/History';
import Login from './ASM/Login';
import Register from './ASM/Register';
import Setting from './ASM/Setting'
import Payment from './ASM/Payment'
import Setting_person from './ASM/Setting_person'
import San_Pham from './ASM/San_Pham'
import Man_hinh_cho from './ASM/Man_hinh_cho';
import AddProduct from './ASM/AddProduct';
import CapNhat from './ASM/Capnhat'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'HomeTab') {
            return <Image style={styles.icon} source={require('./ASM/images/home.png')}/>
          } else if (route.name === 'Giohang') {
            return <Image style={styles.icon} source={require('./ASM/images/shopping-cart.png')}/>
          } else if(route.name === 'Favourite') {
            return <Image style={styles.icon} source={require('./ASM/images/heart.png')}/>
          } else if(route.name == 'History') {
            return <Image style={styles.icon} source={require('./ASM/images/file.png')}/>
          }
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Giohang" component={Giohang} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Man_hinh_cho">
        <Stack.Screen
          name="Man_hinh_cho"
          component={Man_hinh_cho}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen name='ManHinhThem' component={AddProduct} options={{ title: 'Thêm SP' }} />
         <Stack.Screen name='ManHinhCN' component={CapNhat} options={{ title: 'Cap nhat SP' }} />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="San_Pham"
          component={San_Pham}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Setting_person"
          component={Setting_person}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
});

export default App;

// import { Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {

//   const [result, setResult] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
//   const [number1, setNumber1] = useState('');
//   const [number2, setNumber2] = useState('');

//   // Lấy giá trị text khi cộng vào kết quả
//   const congResult = () => {
//     setResult(result + parseFloat(number1) + parseFloat(number2));
//   }

//   // Hien thi Alter khi tru
//   const truResult = () => {
//     const subtractResult = parseFloat(number1) - parseFloat(number2);
//     Alert.alert('Kết quả trừ:', subtractResult.toString());
//   };
//   // Hien thi khi nhan
//   const nhanResult = () => {
//     const multiplyResult = parseFloat(number1) * parseFloat(number2);
//     console.log('Kết quả nhân:', multiplyResult);
//   };
//   // Hien thi ket qua chia 
//   const chiaResult = () => {
//     setShowModal(true);
//   }
//   // Đóng Modal
//   const dongModal = () =>{
//     setShowModal(false);
//   }
//   const handleIntroduction = () => {
//     setShowPersonalInfoModal(true);
//     // Có thể thêm thông tin cá nhân vào đây nếu cần
//   };
//   return (
//     <View>
//       <View style={st.text1}>
//       <Text style={{
//         color: 'white',
//         fontSize: 16,
//         fontWeight: '500',
//       }} >Máy Tính Điện Tử</Text>
//       </View>

//       <View style={{alignItems: 'center', marginTop: 10}}>
//       <Text style={{fontSize: 20,fontWeight: 'bold'}}>{result}</Text>
//       </View>
      
//       <TextInput 
//       style={st.textInput1} 
//       placeholder='Nhập số thứ nhất'
//       onChangeText={(text) => setNumber1(text)}/>
//       <TextInput 
//       style={st.textInput1} 
//       placeholder='Nhập số thứ hai'
//       onChangeText={(text) => setNumber2(text)}/>
      

//       <View style={st.container}>
//         <Pressable style = {st.btn1}
//         onPress={congResult}> 

//           <Text style={st.textBtn}>+</Text>
//         </Pressable>

//         <Pressable style = {st.btn1}
//         onPress={truResult}>
//           <Text style={st.textBtn}>-</Text>
//         </Pressable>

//         <Pressable style = {st.btn1}
//         onPress={nhanResult}>
//           <Text style={st.textBtn}>*</Text>
//         </Pressable>

//         <Pressable style = {st.btn1}
//         onPress={chiaResult}>
//           <Text style={st.textBtn}>/</Text>
//         </Pressable>
        
//       </View>

//       <Pressable style={st.btn2} onPress={handleIntroduction}>
//         <Text style={st.textBtn}>Giới thiệu bản thân</Text>
//       </Pressable>

//       <Modal
//       animationType="slide"
//       transparent={true}
//       visible={showModal}
//       onRequestClose={dongModal}
//       >
//         <View style={st.modalContainer}>
//             <Text style={st.textModal}>Kết quả chia: {parseFloat(number1) / parseFloat(number2)}</Text>
//             <Pressable style={st.closeModalBtn}>
//               <Text style={{color: 'black'}}
//               onPress={dongModal}> Đóng</Text>
//             </Pressable>
//         </View>
//       </Modal>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showPersonalInfoModal}
//         onRequestClose={() => setShowPersonalInfoModal(false)}
//       >
//         <View style={st.modalContainer}>
//           <Image
//             source={require('./ASM/images/rsz_oip.png')}
//             style={st.profileImage}
//           />
//           <Text style={st.textModal}>Họ và tên: Hoàng Trọng Cường</Text>
//           <Text style={st.textModal}>Mã Sinh viên: PH34430</Text>
//           {/* Thêm các thông tin cá nhân khác nếu cần */}
//           <Pressable style={st.closeModalBtn} onPress={() => setShowPersonalInfoModal(false)}>
//             <Text style={{ color: 'black' }}> Đóng</Text>
//           </Pressable>
//         </View>
//       </Modal>
//     </View>
//   )
// }

// export default App

// const st = StyleSheet.create({
//   text1: {
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#73c984',
//     width: 350,
//     marginLeft: 30,
//     marginTop: 20
//   },
//   textInput1: {
//     color: 'black',
//     height: 48,
//     borderWidth: 2,
//     borderRadius: 5,
//     margin: 10,
//     paddingStart: 15,    
//   },
//   btn1: {
//     width: 50,
//     height: 40,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     color: 'blue',
//     borderWidth: 1,
//     marginTop: 30
//   },
//   btn2: {
//     width: 200,
//     height: 50,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     color: 'blue',
//     borderWidth: 1,
//     marginTop: 30,
//     alignSelf: 'center', // Đặt nút ở giữa trang
//   },
//   textBtn: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   container: {
//     flexDirection: 'row',
//     padding: 10,
//     justifyContent: 'space-between'
//   },
//   modalContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//     padding: 30,
//     margin: 10,
//     borderRadius: 10,
//     marginTop: 400
//   }, 
//   textModal:{
//     fontSize: 18,
//     color: 'white',
//     marginBottom: 20,
//   },
//   closeModalBtn: {
//     backgroundColor: '#feb838',
//     padding: 10,
//     borderRadius: 5,
    
//   },
//   introductionBtn: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 30,
//     alignItems: 'center',
//   },
  
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
  
// })

// function setModalVisible(arg0: boolean) {
//   throw new Error('Function not implemented.');
// }

// import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   const handlePressableClick = (message) => {
//     Alert.alert('Thông báo', message);
//   };
//   const handlePressableClick1 = (messager) => {
//     Alert.alert('Thông báo', messager);
//   };
//   return (
//     <View>
//       <ImageBackground style={styles.imgAo} source={require('./ASM/images/ao.png')}>
//       <View style={styles.container}>
//         <Image style={styles.img} source={require('./ASM/images/left.png')}/>
//         <Image style={styles.img2} source={require('./ASM/images/circle.png')}/>
//         <Image style={styles.img2}  source={require('./ASM/images/shopping-cart.png')}/>
//         <Image style={styles.img2} source={require('./ASM/images/three-dots.png')}/>
//       </View>
//       <Pressable onPress={() => handlePressableClick1('Bạn đã nhận được thông báo')}>
//       <Image style={{marginTop: 300,width:'100%'}} source={require('./ASM/images/banner.png')}/>
//       </Pressable>
//       <View style={styles.view}>
//         <View style={styles.view1}>
//           <View style={styles.view2}>
//             <Pressable style={styles.pressAble}>
//             <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:'bold'}}>Yêu thích+</Text>
//             </Pressable>
//             <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>Áo Polo nam Gavin Vải cá sấu</Text>
//             <Image  style={{width:50,height:50,marginLeft:30}} source={require('./ASM/images/bien.png')}/>
//           </View>

//           <View>
//             <Text style={{fontSize:15,fontWeight:'bold',marginLeft:17}}>Cotton co dãn cao cấp dệt bo lưới chuẩn...</Text>
//           </View>

//           <View>
//             <Text style={{fontSize:20,fontWeight:'bold',marginLeft:17,marginTop: 20,color:'red'}}>$155.000</Text>
//           </View>

//           <View>
//             <Text style={{fontSize:20,fontWeight:'bold',marginLeft:17,marginTop: 10,textDecorationLine: 'line-through',}}>$220.000</Text>
//           </View>

//           <View style={{flexDirection:'row'}}>
//           <Image style={{width:80,height:20,marginLeft:20,marginTop:20}} source={require('./ASM/images/sao.png')}/>
//           <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold'}}>4.9</Text>
//           <Text style={{marginLeft:20,marginTop:20,fontWeight:'bold'}}>Đã bán 2.1k</Text>
//           <Image style={{width:20,height:20,marginLeft:50,marginTop:20}} source={require('./ASM/images/heart.png')}/>
//           <Image style={{width:20,height:20,marginLeft:20,marginTop:20}} source={require('./ASM/images/circle.png')}/>
//           <Image style={{width:22,height:22,marginLeft:20,marginTop:20}} source={require('./ASM/images/messenger.png')}/>
//           </View>
//         </View>

//         <View style={styles.view4}>
//           <Text style={{marginRight:80,fontSize:15,fontWeight:'bold',marginLeft:5}}>Voucher của shop</Text>
//           <Pressable style={styles.pressAble1}>
//             <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Giảm 10%</Text>
//           </Pressable>
//           <Pressable style={styles.pressAble2}>
//             <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Giảm 15%</Text>
//           </Pressable>
//           <Text style={{fontWeight:'bold',fontSize:20,marginLeft:10}}> > </Text>
//         </View>

//         <View style={styles.view4}>
//           <Text style={{marginRight:10,fontSize:15,fontWeight:'bold',marginLeft:5}}>Gía bán buôn bán/lẻ</Text>
//           <Text>
//             Giá còn $139.000 khi mua >= 2 sản phẩm
//           </Text>
//         </View>

//         <View style={styles.view5}>
//           <Pressable style={{backgroundColor:'#25a996',width:100}} onPress={() => handlePressableClick('Bạn đã click vào shopping-cart')}>
//           <Image style={styles.img3} source={require('./ASM/images/three-dots.png')}/>
//           </Pressable>
//           <Pressable onPress={() => handlePressableClick('Bạn đã click vào shopping-cart')} style={{backgroundColor:'#25a996',width:100}}>
//           <Image style={styles.img3} source={require('./ASM/images/shopping-cart.png')}/>
//           </Pressable>
//           <Pressable onPress={() => handlePressableClick('Bạn đã click vào shopping-cart')} style={{backgroundColor:'#ee4d2f',width:220}}>
//             <Text style={{textAlign:'center',marginTop:13,fontSize:20,color:'white',fontWeight:'bold'}}>Mua ngay</Text>
//           </Pressable>
//         </View>
//       </View>
//       </ImageBackground>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   img: {
//     width:25,
//     height:25,
//     marginTop: 20,
//     marginLeft: 20,
//     marginRight:220
//   },
//   img2: {
//     width:25,
//     height:25,
//     marginTop: 20,
//     marginLeft: 20,
//   },
//   img3: {
//     width:40,
//     height:40,
//     marginTop:10,
//     marginLeft: 25,
//   },
  
//   view: {
//     width:'100%',
//     height:'100%',
//     backgroundColor: '#ededed'
//   },
//   pressAble:{
//     backgroundColor:'red',
//     height:20,
//     width:80
//   },
//   pressAble1:{
//     backgroundColor:'orange',
//     height:20,
//     width:80,
//   },
//   pressAble2:{
//     backgroundColor:'orange',
//     height:20,
//     width:80,
//     marginLeft:10
//   },
//   view1: {
//     width:'100%',
//     height:200,
//     backgroundColor: 'white'
//   },
//   view4: {
//     width:'100%',
//     height:50,
//     marginTop:10,
//     backgroundColor: 'white',
//     flexDirection:'row',
//     alignItems:'center',
//   },
//   view5: {
//     height:60,
//     marginTop:20,
//     backgroundColor: 'white',
//     flexDirection:'row',
//   },
//   view2: {
//     flexDirection:'row',
//     marginTop:20,
//     marginLeft:15,
//     marginRight:10,
//     height:25
//   },
  
//   container: {
//     flexDirection: 'row'
//   },
//   imgAo: {
//     width:'100%',
//     height:'100%'
//   }
// })