import { View, Text, FlatList } from "react-native";
import React from "react";
import BestSellerItem from "./BestSellerItem";
import styles from "../styles";

export default function BestSellerList({ products }) {
    const listData = [
        {
            id: 1,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 2,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 3,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 170,
        },
        {
            id: 4,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 5,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 6,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 7,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 8,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 9,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
        {
            id: 10,
            sourceIcon: require("../../assets/icon/ao123.png"),
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
        },
    ];
    return products ? (
        <View style={[styles.mb_10]}>
            <View style={styles.p_15}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    Top sản phẩm bán chạy
                </Text>
            </View>
            <View style={styles.pl_10}>
                <FlatList
                    data={products}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <BestSellerItem key={index} item={item} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    ) : null;
}
