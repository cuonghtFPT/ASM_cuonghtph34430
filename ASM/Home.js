import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, FlatList, Image, Pressable, Text, TextInput, ActivityIndicator } from 'react-native';

const Home = (props) => {
    const { navigation } = props;
    const [isLoading, setisLoading] = useState(true);
    const [dssp, setdssp] = useState([]);

    const getListPro = async () => {
        let url_api = 'http://10.24.32.155:3001/tb_sanpham';

        try {
            const response = await fetch(url_api);
            const json = await response.json();
            
            // Filter out the products that have been added
            const filteredProducts = json.filter(product => !product.added);

            setdssp(filteredProducts);
        } catch (error) {
            console.error(error);
        } finally {
            setisLoading(false);
        }
    }

    const Click = () => {
        navigation.navigate('San_Pham');
    };

    const renderProduct = ({ item }) => {
        const xoaSP = () => {
            // Your existing delete product logic...
        }

        const capNhatSP = () => {
            // Your existing update product logic...
        }

        return (
            <View style={styles.viewContainer}>
                <Image style={styles.image} source={{ uri: item.anh }} />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textTitle}>{item.name}</Text>
                    </View>
                    <Text>{item.noidung}</Text>
                    <View style={styles.textView}>
                        <Text>{item.giaca}</Text>
                        <Pressable onPress={() => { props.navigation.navigate('ManHinhThem') }} style={styles.congText}>
                            <Text>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    }

    useEffect(() => {
        getListPro();
    }, []);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textFind}>Find the best coffee for you</Text>
                <Pressable onPress={() => navigation.navigate('Setting')}>
                    <Image style={styles.setting} source={require('./images/setting.png')} />
                </Pressable>
            </View>
            <View style={styles.container}>
                <TextInput placeholder='Search Coffee......' style={styles.textInput} />
            </View>

            <ScrollView>
                <ScrollView horizontal>
                    {
                        (isLoading) ? (
                            <ActivityIndicator />
                        ) : (
                            <FlatList
                                data={dssp}
                                renderItem={renderProduct}
                                keyExtractor={(item_sp) => { return item_sp.id }}
                                horizontal={true}
                                contentContainerStyle={styles.horizontalFlatList}
                            />
                        )
                    }
                </ScrollView>

                <ScrollView horizontal>
                    {
                        (isLoading) ? (
                            <ActivityIndicator />
                        ) : (
                            <FlatList
                                data={dssp}
                                renderItem={renderProduct}
                                keyExtractor={(item_sp) => { return item_sp.id }}
                                horizontal={true}
                                contentContainerStyle={styles.horizontalFlatList}
                            />
                        )
                    }
                </ScrollView>
            </ScrollView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
    },
    textFind: {
        fontSize: 30,
        paddingLeft: 12,
        fontWeight: 'bold',
        width: 200,
        color: '#000000',
    },
    setting: {
        width: 30,
        height: 30,
        marginTop: 20,
        marginRight: 10,
    },
    textInput: {
        height: 45,
        width: 350,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 4,
        marginLeft: 15,
        marginRight: 10,
    },
    viewContainer: {
        marginRight: 20
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#10131a',
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        width: 125,
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    congText: {
        width: 30,
        height: 20,
        backgroundColor: '#d3783c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 1,
        marginLeft: 21,
    },
    horizontalFlatList: {
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 15,
        marginBottom: 20,
    },
});
