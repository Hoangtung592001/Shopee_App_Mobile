import {
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/notiComponents/Header";
import ProductInShop from "../components/shopComponents/ProductInShop";
import styles from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllProductsInShop,
    getPersonalInfo,
} from "../redux/actions/userActions";
import { deleteProduct } from "../redux/actions/userActions";
export default function ProductManager() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const info = useSelector((state) => state.user.info);
    useEffect(() => {
        dispatch(getPersonalInfo(accessToken));
        dispatch(getAllProductsInShop(accessToken));
    }, []);
    return info?.shop?.products ? (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
                <Header canBack={true} title={"Quản lý sản phẩm"} />
                <TouchableOpacity
                    style={{ position: "absolute", top: 55, right: 10 }}
                    onPress={() => {
                        navigation.navigate("EditProductInfo", {
                            title: "Thêm sản phẩm",
                            item: {
                                productName: "",
                                priceEach: "",
                                image: "",
                                otherImages: [],
                                description: "",
                            },
                        });
                    }}
                >
                    <Image
                        source={require("../assets/icon/add.png")}
                        style={styles.img_32x32}
                    />
                </TouchableOpacity>
                {info.shop.products.map((item, index) => (
                    <ProductInShop
                        uriImg={item.image}
                        productName={item.productName}
                        price={item.priceEach}
                        key={index}
                        handleEdit={() => {
                            navigation.navigate("EditProductInfo", {
                                title: "Sửa thông tin sản phẩm",
                                productName: "Áo thun 123",
                                item: item,
                            });
                        }}
                        handleDelete={() => {
                            Alert.alert(
                                "Cảnh báo",
                                "Bạn có chắc chắn muốn xoá sản phẩm này không ?",
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
                                            dispatch(
                                                deleteProduct(
                                                    item.id,
                                                    accessToken
                                                )
                                            );
                                            navigation.navigate("Home");
                                        },
                                    },
                                ]
                            );
                        }}
                    />
                ))}
            </SafeAreaView>
        </ScrollView>
    ) : null;
}
