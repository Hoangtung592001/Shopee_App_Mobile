import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/notiComponents/Header";
import { FlatList } from "react-native-gesture-handler";
import RecommendItem from "../components/homeComponents/RecommendItem";
import { useSelector, useDispatch } from "react-redux";
export default function LikedProduct() {
    const deliveredProducts = useSelector(
        (state) => state.product.infoOrders.deliveredProducts
    );

    const listData = [
        {
            id: 1,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 2,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 3,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 170,
        },
        {
            id: 4,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 5,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 6,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 7,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 8,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 9,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 10,
            sourceIcon: require("../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
    ];
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
            <Header
                title={"Mua lại sản phẩm"}
                canBack={true}
                containCart={true}
            />
            <FlatList
                data={deliveredProducts}
                renderItem={({ item, index }) => (
                    <RecommendItem
                        recommendItem={item.product}
                        containRating={false}
                    />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
}
