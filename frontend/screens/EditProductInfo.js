import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    Button,
    Platform,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import FieldWithUpperLabel from "../components/checkInComponents/FieldWithUpperLabel";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import SeparateView from "../components/userComponents/SeparateView";
import { changeInfoProduct, addProduct } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import UserOptionTag from "../components/userComponents/UserOptionTag";
import { Picker } from "@react-native-picker/picker";
import { handleUpload } from "../redux/actions/productActions";
import { SERVICE_URL } from "../constants/server";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const createFormData = (photo, body = {}) => {
    const data = new FormData();

    data.append("image", {
        name: photo.fileName ? photo.fileName : "Hello",
        type: photo.type,
        uri:
            Platform.OS === "ios"
                ? photo.uri.replace("file://", "")
                : photo.uri,
    });

    return data;
};

export default function EditProductInfo({ route }) {
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const infoProduct = route.params.item ? route.params.item : {};
    const [productName, setProductName] = useState(infoProduct.productName);
    const [price, setPrice] = useState(
        infoProduct.priceEach ? infoProduct.priceEach.toString() : ""
    );
    const [uriProductAvt, setUriProductAvt] = useState(
        infoProduct.image ? infoProduct.image : null
    );
    const [uriProductImg1, setUriProductImg1] = useState(
        infoProduct.otherImages[0] ? infoProduct.otherImages[0].name : null
    );
    const [uriProductImg2, setUriProductImg2] = useState(
        infoProduct.otherImages[1] ? infoProduct.otherImages[1].name : null
    );
    const [uriProductImg3, setUriProductImg3] = useState(
        infoProduct.otherImages[2] ? infoProduct.otherImages[2].name : null
    );
    const [description, setDescription] = useState(infoProduct.description);
    const [photo, setPhoto] = React.useState(null);
    const handleChoosePhoto = async (callback) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            await axios(
                SERVICE_URL.API_SERVER + "product/upload-image-product",
                {
                    data: createFormData(result),
                    method: "POST",
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                }
            )
                .then((res) => {
                    callback(res.data.data.url);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    const listCategory = [
        {
            id: 2,
            title: "Quần áo nam",
        },
        {
            id: 3,
            title: "Quần áo nữ",
        },
        {
            id: 4,
            title: "Nhà cửa & đời sống",
        },
        {
            id: 5,
            title: "Đồ chơi",
        },
        {
            id: 6,
            title: "Sách",
        },
        {
            id: 7,
            title: "Thiết bị điện tử",
        },
        {
            id: 8,
            title: "Mỹ phẩm",
        },
        {
            id: 9,
            title: "Giày dép nam",
        },
        {
            id: 10,
            title: "Giày dép nữ",
        },
        {
            id: 11,
            title: "Phụ kiện",
        },
    ];
    const seletedCate = listCategory.find((category) => {
        return category.id == infoProduct.productLine;
    });
    const [selectedCategory, setSelectedCategory] = useState(
        seletedCate?.title
    );
    const [selectedCategoryId, setSelectedCategoryId] = useState(
        seletedCate?.id
    );
    const [origin, setOrigin] = useState(infoProduct.origin);
    const [openCategory, setOpenCategory] = useState(false);

    return (
        // <View
        //     style={{
        //         flex: 1,
        //         alignItems: "center",
        //         justifyContent: "center",
        //     }}
        // >
        //     {photo && (
        //         <>
        //             <Image
        //                 source={{ uri: photo.uri }}
        //                 style={{ width: 300, height: 300 }}
        //             />
        //             {/* <Button title="Upload Photo" onPress={handleUploadPhoto} /> */}
        //             <Button title="Upload Photo" />
        //         </>
        //     )}
        //     <Button
        //         title="Choose Photo"
        //         onPress={() => {
        //             handleChoosePhoto(setPhoto);
        //         }}
        //     />
        // </View>
        <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
            <ScrollView>
                <Header title={route.params.title} canBack={true} />
                <View style={styles.hr_light_bottom}>
                    <FieldWithUpperLabel
                        label={"Tên sản phẩm"}
                        plhdTitle={"Tên sản phẩm"}
                        value={productName}
                        onChangeText={(txt) => setProductName(txt)}
                    />
                </View>
                <View style={styles.hr_light_bottom}>
                    <FieldWithUpperLabel
                        label={"Giá sản phẩm"}
                        plhdTitle={"Giá"}
                        value={price}
                        onChangeText={(txt) => setPrice(txt)}
                    />
                </View>
                <View style={styles.hr_light_bottom}>
                    {!uriProductAvt ? (
                        <>
                            <FieldWithUpperLabel
                                label={"Ảnh đại diện sản phẩm"}
                                plhdTitle={"Link ảnh"}
                                value={uriProductAvt}
                                onChangeText={(txt) => setUriProductAvt(txt)}
                                showText={false}
                            />
                            <Button
                                title="Choose Photo"
                                onPress={() => {
                                    handleChoosePhoto(setUriProductAvt);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <FieldWithUpperLabel
                                label={"Ảnh đại diện sản phẩm"}
                                plhdTitle={"Link ảnh"}
                                value={uriProductAvt}
                                onChangeText={(txt) => setUriProductAvt(txt)}
                                showText={false}
                            />

                            <Image
                                source={{ uri: uriProductAvt }}
                                style={{ width: 300, height: 300 }}
                            />
                        </>
                    )}
                </View>
                <View style={styles.hr_light_bottom}>
                    <FieldWithUpperLabel
                        label={"Xuất sứ sản phẩm"}
                        plhdTitle={"Xuất sứ"}
                        value={origin}
                        onChangeText={(txt) => setOrigin(txt)}
                    />
                </View>
                <SeparateView />
                {!uriProductImg1 ? (
                    <>
                        <FieldWithUpperLabel
                            label={"Ảnh phụ 1"}
                            plhdTitle={"Link ảnh"}
                            value={uriProductImg1}
                            onChangeText={(txt) => setUriProductImg1(txt)}
                            showText={false}
                        />
                        <Button
                            title="Choose Photo"
                            onPress={() => {
                                handleChoosePhoto(setUriProductImg1);
                            }}
                        />
                    </>
                ) : (
                    <>
                        <View style={styles.hr_light_bottom}>
                            <FieldWithUpperLabel
                                label={"Link ảnh phụ 1"}
                                plhdTitle={"Link ảnh 1"}
                                value={uriProductImg1}
                                onChangeText={(txt) => setUriProductImg1(txt)}
                                showText={false}
                            />
                        </View>
                        <Image
                            source={{ uri: uriProductImg1 }}
                            style={{ width: 300, height: 300 }}
                        />
                    </>
                )}
                {!uriProductImg2 ? (
                    <>
                        <FieldWithUpperLabel
                            label={"Ảnh phụ 2"}
                            plhdTitle={"Link ảnh"}
                            value={uriProductImg2}
                            onChangeText={(txt) => setUriProductImg2(txt)}
                            showText={false}
                        />
                        <Button
                            title="Choose Photo"
                            onPress={() => {
                                handleChoosePhoto(setUriProductImg2);
                            }}
                        />
                    </>
                ) : (
                    <>
                        <View style={styles.hr_light_bottom}>
                            <FieldWithUpperLabel
                                label={"Link ảnh phụ 2"}
                                plhdTitle={"Link ảnh 2"}
                                value={uriProductImg2}
                                onChangeText={(txt) => setUriProductImg2(txt)}
                                showText={false}
                            />
                        </View>

                        <Image
                            source={{ uri: uriProductImg1 }}
                            style={{ width: 300, height: 300 }}
                        />
                    </>
                )}
                {!uriProductImg3 ? (
                    <>
                        <FieldWithUpperLabel
                            label={"Ảnh phụ 3"}
                            plhdTitle={"Link ảnh 3"}
                            value={uriProductImg3}
                            onChangeText={(txt) => setUriProductImg3(txt)}
                            showText={false}
                        />
                        <Button
                            title="Choose Photo"
                            onPress={() => {
                                handleChoosePhoto(setUriProductImg3);
                            }}
                        />
                    </>
                ) : (
                    <>
                        <View style={styles.hr_light_bottom}>
                            <FieldWithUpperLabel
                                label={"Link ảnh phụ 3"}
                                plhdTitle={"Link ảnh 3"}
                                value={uriProductImg3}
                                onChangeText={(txt) => setUriProductImg2(txt)}
                                showText={false}
                            />
                        </View>

                        <Image
                            source={{ uri: uriProductImg3 }}
                            style={{ width: 300, height: 300 }}
                        />
                    </>
                )}
                <SeparateView />
                <TouchableOpacity
                    style={[
                        styles.p_10,
                        styles.flex_row,
                        styles.hr_light_bottom,
                    ]}
                    onPress={() => {
                        setOpenCategory(true);
                    }}
                >
                    <View
                        style={[
                            styles.alignCenterItem,
                            styles.alignCenterItemVertically,
                        ]}
                    >
                        <Text>Danh mục hàng</Text>
                    </View>
                    <View style={{ width: "75%", alignItems: "flex-end" }}>
                        <View
                            style={[
                                styles.alignCenterItem,
                                styles.alignCenterItemVertically,
                                styles.flex_row,
                            ]}
                        >
                            <Text
                                style={
                                    selectedCategory == ""
                                        ? { color: "#8c8c8c" }
                                        : null
                                }
                            >
                                {selectedCategory == ""
                                    ? "Thiết lập ngay"
                                    : selectedCategory}
                            </Text>
                            <Image
                                source={require("../assets/icon/right_arrow.png")}
                                style={styles.img_24x24}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <SeparateView />

                <View>
                    <TextInput
                        style={{
                            backgroundColor: "#f2f2f2",
                            height: 150,
                            margin: 10,
                            paddingLeft: 10,
                            paddingTop: 10,
                        }}
                        placeholder={"Mô tả sản phẩm"}
                        multiline={true}
                        value={description}
                        onChangeText={(txt) => setDescription(txt)}
                    />
                </View>
                <TouchableOpacity
                    style={[
                        {
                            marginLeft: 20,
                            marginTop: 20,
                            marginRight: 20,
                            backgroundColor: "#66b3ff",
                            borderRadius: 10,
                            height: 30,
                        },
                        styles.alignCenterItem,
                        styles.alignCenterItemVertically,
                    ]}
                    onPress={() => {
                        if (infoProduct.productName) {
                            dispatch(
                                changeInfoProduct(
                                    accessToken,
                                    {
                                        productName: productName,
                                        image: uriProductAvt,
                                        priceEach: price,
                                        otherImages: [
                                            uriProductImg1,
                                            uriProductImg2,
                                            uriProductImg3,
                                        ],
                                        description: description,
                                    },
                                    infoProduct.id
                                )
                            );
                            alert("Sửa sản phẩm thành công!");
                        } else {
                            dispatch(
                                addProduct(accessToken, {
                                    productName: productName,
                                    image: uriProductAvt,
                                    priceEach: price,
                                    otherPhotos: [
                                        uriProductImg1,
                                        uriProductImg2,
                                        uriProductImg3,
                                    ],
                                    description: description,
                                    discount: 0,
                                    quantityInStock: 1000,
                                    productLine: selectedCategoryId,
                                    origin: origin,
                                })
                            );
                            alert("Thêm sản phẩm thành công!");
                        }

                        navigation.navigate("Home", { reRender: true });
                    }}
                >
                    <Text style={{ color: "#fff" }}>Lưu</Text>
                </TouchableOpacity>
                {openCategory ? (
                    <View
                        style={{
                            borderTopColor: "#ccc",
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            backgroundColor: "#fff",
                            borderTopWidth: 1,
                            paddingTop: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                setOpenCategory(false);
                            }}
                            style={{ alignItems: "flex-end" }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    color: "#3399ff",
                                    paddingRight: 10,
                                }}
                            >
                                Done
                            </Text>
                        </TouchableOpacity>
                        <Picker
                            selectedValue={selectedCategory}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedCategory(itemValue);
                                setSelectedCategoryId(itemIndex + 2);
                            }}
                        >
                            {listCategory.map((item) => (
                                <Picker.Item
                                    key={item.id}
                                    label={item.title}
                                    value={item.title}
                                />
                            ))}
                        </Picker>
                    </View>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
}
