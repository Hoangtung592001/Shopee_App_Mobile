import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    Button,
    Image,
    ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/notiComponents/Header";
import SeparateView from "../components/userComponents/SeparateView";
import NormalField from "../components/checkInComponents/NormalField";
import FieldWithUpperLabel from "../components/checkInComponents/FieldWithUpperLabel";
import styles from "../components/styles";
import { registerShop } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { deleteError } from "../redux/actions/errorActions";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { SERVICE_URL } from "../constants/server";
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
export default function RegisterSeller() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [shopName, setShopName] = useState("");
    const [address, setAddress] = useState("");
    const [linkImage, setLinkImage] = useState("");
    const [linkBgImage, setLinkBgImage] = useState("");
    const error = useSelector((state) => state.error);
    const accessToken = useSelector((state) => state.user.token.refreshToken);

    useEffect(() => {
        return () => dispatch(deleteError());
    }, []);
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

    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
            <ScrollView>
                <Header title={"Cài đặt thông tin cửa hàng"} canBack={true} />
                <SeparateView />
                <View style={styles.hr_bottom}>
                    <FieldWithUpperLabel
                        plhdTitle={"Nhập tên shop"}
                        label={"Tên shop"}
                        value={shopName}
                        onChangeText={(text) => setShopName(text)}
                        focus={true}
                    />
                </View>
                <View style={styles.hr_light_bottom}>
                    {!linkImage ? (
                        <>
                            <FieldWithUpperLabel
                                plhdTitle={"Link ảnh logo"}
                                label={"Ảnh Logo của shop"}
                                value={linkImage}
                                onChangeText={(txt) => setLinkImage(txt)}
                                showText={false}
                            />
                            <Button
                                title="Choose Photo"
                                onPress={() => {
                                    handleChoosePhoto(setLinkImage);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <FieldWithUpperLabel
                                plhdTitle={"Link ảnh logo"}
                                label={"Ảnh Logo của shop"}
                                value={linkImage}
                                onChangeText={(txt) => setLinkImage(txt)}
                                showText={false}
                            />

                            <Image
                                source={{ uri: linkImage }}
                                style={{ width: 300, height: 300 }}
                            />
                        </>
                    )}
                </View>
                <View style={styles.hr_light_bottom}>
                    {!linkBgImage ? (
                        <>
                            <FieldWithUpperLabel
                                plhdTitle={"Link ảnh bìa"}
                                label={"Ảnh bìa của shop"}
                                value={linkBgImage}
                                onChangeText={(txt) => setLinkBgImage(txt)}
                                showText={false}
                            />
                            <Button
                                title="Choose Photo"
                                onPress={() => {
                                    handleChoosePhoto(setLinkBgImage);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <FieldWithUpperLabel
                                plhdTitle={"Link ảnh bìa"}
                                label={"Ảnh bìa của shop"}
                                value={linkBgImage}
                                onChangeText={(txt) => setLinkBgImage(txt)}
                                showText={false}
                            />

                            <Image
                                source={{ uri: linkBgImage }}
                                style={{ width: 300, height: 300 }}
                            />
                        </>
                    )}
                </View>
                {/* <View style={styles.hr_bottom}>
                <FieldWithUpperLabel
                    plhdTitle={"Link ảnh logo"}
                    label={"Ảnh Logo của shop"}
                    value={linkImage}
                    onChangeText={(link) => setLinkImage(link)}
                />
            </View>
            <FieldWithUpperLabel
                plhdTitle={"Link ảnh bìa"}
                label={"Ảnh bìa của shop"}
                value={linkBgImage}
                onChangeText={(link) => setLinkBgImage(link)}
            /> */}
                <SeparateView />
                <View style={styles.hr_bottom}>
                    <FieldWithUpperLabel
                        plhdTitle={"Địa chỉ"}
                        label={"Địa chỉ lấy hàng"}
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                </View>
                <TouchableOpacity
                    style={[
                        {
                            backgroundColor: "#66b3ff",
                            borderRadius: 10,
                            height: 35,
                            marginLeft: 40,
                            marginTop: 20,
                            marginRight: 40,
                        },
                        styles.alignCenterItem,
                        styles.alignCenterItemVertically,
                    ]}
                    onPress={() => {
                        dispatch(
                            registerShop(accessToken, {
                                shopName: shopName,
                                address: address,
                                profilePicture: linkImage,
                                coverPhoto: linkBgImage,
                            })
                        );
                        Alert.alert(
                            "Thông báo",
                            "Bạn đã đăng ký shop thành công!",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () =>
                                        console.log("Cancel Pressed"),
                                    style: "cancel",
                                },
                                {
                                    text: "OK",
                                    onPress: () => {
                                        navigation.navigate("Home");
                                    },
                                },
                            ]
                        );
                    }}
                >
                    <Text style={{ color: "#fff", fontSize: 16 }}>Lưu</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
