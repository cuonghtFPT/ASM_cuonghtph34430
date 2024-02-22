import { useState } from "react";
import { View, Text, TextInput, Alert, Button, Image } from "react-native";

const AddProduct = (props) => {
    const [name, setName] = useState('');
    const [noidung, setNoiDung] = useState('');
    const [giaca, setGiaCa] = useState('');
    const [size, setSize] = useState('');
    // Feed cứng đường link ảnh không thay đổi
    const imageLink = "https://thuytinhgiare.com/wp-content/uploads/2023/07/hinh-anh-ly-ca-phe-muoi.jpg";

    const validateAndSaveProduct = () => {
        if (!name || !giaca || !noidung || !size) {
            Alert.alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        const parsedPrice = parseFloat(giaca);
        if (isNaN(parsedPrice) || parsedPrice <= 0) {
            Alert.alert("Vui lòng nhập giá hợp lệ.");
            return;
        }

        let objSP = { name, giaca: parsedPrice, noidung, size, imageLink };
        let url_api = `http://10.24.32.155:3002/tb_sanphamgiohang`;

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
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Chỉnh sửa sản phẩm</Text>
            <TextInput placeholder="Name" value={name} onChangeText={(txt) => { setName(txt) }} />
            <TextInput placeholder="Description" value={noidung} onChangeText={(txt) => { setNoiDung(txt) }} />
            <TextInput placeholder="Price" value={giaca} onChangeText={(txt) => { setGiaCa(txt) }} keyboardType="numeric" />
            <TextInput placeholder="Size" value={size} onChangeText={(txt) => { setSize(txt) }} />
            {/* Hiển thị ảnh với đường link cứng */}
            <Image source={{ uri: imageLink }} style={{ width: 100, height: 100 }} />
            <Button title="Save" onPress={validateAndSaveProduct} />
        </View>
    );
}

export default AddProduct;
