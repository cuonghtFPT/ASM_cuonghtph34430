// import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
// import React, {useState} from 'react';

// const Giohang = (props) => {
//   const [isLoading, setisLoading] = useState(true);
//   const [dssp, setdssp] = useState([]);

//   const getListPro = async () => {
//     let url_api = 'http://192.168.0.105:30001/tb_sanpham';

//     try {
//         const response = await fetch(url_api);
//         const json = await response.json();
//         setdssp(json);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         setisLoading(false);
//     }
// }
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//       {/* <View style={styles.viewTB}>
        
//       </View> */}

//       <View style={styles.container_}>
//       <View style={styles.viewTB}>
//         <View style={styles.viewContainer}>
//           <Image style={styles.image} source={require('./images/lote.jpg')} />
//           <View style={styles.viewPad}>
//             <Text style={styles.textTitle}>Capuchino</Text>
//             <Text>Robuto Beans</Text>
//             <Pressable style={styles.pressAble}>
//               <View style={styles.pressableContent}>
//                 <Text style={styles.pressText}>M</Text>
//                 <Text style={styles.pressText2}>$4.40</Text>
//               </View>
//               <View style={styles.pressableContent}>
//               <Text style={styles.pressText3}>-</Text>
//               <Text style={styles.pressText4}>1</Text>
//               <Text style={styles.pressText3}>+</Text>
//               </View>
//             </Pressable>
//           </View>
//       </View>
//       </View>
//       </View>

//       <View style={styles.container_}>
//       <View style={styles.viewTB}>
//         <View style={styles.viewContainer}>
//           <Image style={styles.image} source={require('./images/lote.jpg')} />
//           <View style={styles.viewPad}>
//             <Text style={styles.textTitle}>Capuchino</Text>
//             <Text>Robuto Beans</Text>
//             <Pressable style={styles.pressAble}>
//               <View style={styles.pressableContent}>
//                 <Text style={styles.pressText}>M</Text>
//                 <Text style={styles.pressText2}>$4.40</Text>
//               </View>
//               <View style={styles.pressableContent}>
//               <Text style={styles.pressText3}>-</Text>
//               <Text style={styles.pressText4}>1</Text>
//               <Text style={styles.pressText3}>+</Text>
//               </View>
//             </Pressable>
//           </View>
//       </View>
//       </View>
//       </View>

//       {/* <View style={styles.viewTB1}>
//         <View style={styles.viewContainer}>
//           <Image style={styles.image} source={require('./images/lote.jpg')} />
//           <View style={styles.viewPad}>
//             <Text style={styles.textTitle}>Robuto Beans</Text>
//             <Text>Robuto Beans</Text>
//             <Pressable>
//               <View>
//                 <Text>Medium Robuto</Text>
//               </View>
//             </Pressable>
//           </View>
//         </View>

//         <View style={styles.sizeContainer}>
//           <Pressable style={styles.pressableContainer}>
//             <View style={styles.pressableContent}>
//               <Text style={styles.pressText}>S</Text>
//               <Text style={styles.pressText2}>$4.40</Text>
//               <Text style={styles.pressText3}>-</Text>
//               <Text style={styles.pressText}>1</Text>
//               <Text style={styles.pressText3}>+</Text>
//             </View>
//           </Pressable>
//           <Pressable style={styles.pressableContainer}>
//             <View style={styles.pressableContent}>
//               <Text style={styles.pressText}>M</Text>
//               <Text style={styles.pressText2}>$4.40</Text>
//               <Text style={styles.pressText3}>-</Text>
//               <Text style={styles.pressText}>1</Text>
//               <Text style={styles.pressText3}>+</Text>
//             </View>
//           </Pressable>
//           <Pressable style={styles.pressableContainer}>
//             <View style={styles.pressableContent}>
//               <Text style={styles.pressText}>L</Text>
//               <Text style={styles.pressText2}>$4.40</Text>
//               <Text style={styles.pressText3}>-</Text>
//               <Text style={styles.pressText}>1</Text>
//               <Text style={styles.pressText3}>+</Text>
//             </View>
//           </Pressable>
//         </View>
//       </View> */}
//     </View>
//     </ScrollView>
//   );
// };

// export default Giohang;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     padding: 5,
//   },
//   viewContainer: {
//     flexDirection: 'row',
//     paddingLeft: 10,
//     borderRadius: 10,
//   },
//   viewTB: {
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   viewTB1: {
//     borderWidth: 1,
//     borderRadius: 10,
//     marginTop: 40
//   },

//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginTop: 10
//   },
//   textTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10
//   },
//   viewPad: {
//     marginLeft: 15,
//   },
//   sizeContainer: {
//     flexDirection: 'column',
//     marginTop: 10,
//   },
//   pressableContainer: {
//     marginRight: 10,
//     borderRadius: 5,
//   },
//   pressableContent: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   pressText: {
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: '#000000',
//     width: 50,
//     paddingLeft: 20,
//     borderRadius: 5
//   },

//   pressText2: {
//     color: '#000000',
//     marginHorizontal: 5,
//     fontWeight: 'bold',
//     marginLeft: 70,
//     marginRight: 50
//   },

//   pressText3: {
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: '#da7029',
//     width: 25,
//     paddingLeft: 10,
//     borderRadius: 5,
//     marginLeft: 10,
//     marginRight:10
//   },

//   pressText4: {
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: '#000000',
//     width: 50,
//     paddingLeft: 20,
//     borderRadius: 5,
//     marginLeft: 20,
//     marginRight: 20,
    
//   },
//   container_: {
//     marginTop: 30
//   }
// });

import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Image, Pressable, Text } from 'react-native';

const Giohang = (props) => {
    const [isLoading, setisLoading] = useState(true);
    const [dssp, setdssp] = useState([]);

    const getListPro = async () => {
        let url_api = 'http://10.24.32.155:3002/tb_sanphamgiohang';

        try {
            const response = await fetch(url_api);
            const json = await response.json();
            setdssp(json);
        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);
        }
    }

    const xoaSP = (itemId) => {
        let url_api_del = `http://10.24.32.155:3002/tb_sanphamgiohang/${itemId}`;

        fetch(url_api_del, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status === 200) {
                alert("Xoa Thanh Cong");
                // Gọi lại hàm getListPro để cập nhật danh sách sản phẩm sau khi xóa
                getListPro();
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }

    useEffect(() => {
        getListPro();
    }, []);

    const renderProduct = (item) => {
        return (
            <View key={item.id} style={styles.viewTB}>
                <Pressable onPress={() => xoaSP(item.id)}>
                    <Text style={{ position: 'absolute', marginLeft: 390, fontWeight: 'bold', fontSize: 20 }}>×</Text>
                </Pressable>
                <View style={styles.viewContainer}>
                    <Image style={styles.image} source={{ uri: item.anh }} />
                    <View style={styles.viewPad}>
                        <Text style={styles.textTitle}>{item.name}</Text>
                        <Text>{item.noidung}</Text>
                        <Pressable style={styles.pressAble}>
                            <View style={styles.pressableContent}>
                                <Text style={styles.pressText}>{item.size}</Text>
                                <Text style={styles.pressText2}>{item.giaca}</Text>
                            </View>
                            <View style={styles.pressableContent}>
                                <Text style={styles.pressText3}>-</Text>
                                <Text style={styles.pressText4}>1</Text>
                                <Text style={styles.pressText3}>+</Text>
                                <Pressable style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#da7029', borderRadius: 10, marginLeft: 20 }}
                                    onPress={() => props.navigation.navigate('ManHinhCN', { item_sp: item })}>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 10, paddingRight: 10, color: 'white' }}>Sửa</Text>
                                </Pressable>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container_}>
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    dssp.map((item) => renderProduct(item))
                )}
            </View>
        </ScrollView>
    );
};

export default Giohang;

const styles = StyleSheet.create({
    container_: {
        marginTop: 30,
    },
    container: {
        flexDirection: 'column',
        padding: 5,
    },
    viewContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        borderRadius: 10,
    },
    viewTB: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 10
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    viewPad: {
        marginLeft: 15,
    },
    sizeContainer: {
        flexDirection: 'column',
        marginTop: 10,
    },
    pressableContainer: {
        marginRight: 10,
        borderRadius: 5,
    },
    pressableContent: {
        flexDirection: 'row',
        padding: 10,
    },
    pressText: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#000000',
        width: 50,
        paddingLeft: 20,
        borderRadius: 5
    },
    pressText2: {
        color: '#000000',
        marginHorizontal: 5,
        fontWeight: 'bold',
        marginLeft: 70,
        marginRight: 50
    },
    pressText3: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#da7029',
        width: 25,
        paddingLeft: 10,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    },
    pressText4: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#000000',
        width: 50,
        paddingLeft: 20,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
    },
});
