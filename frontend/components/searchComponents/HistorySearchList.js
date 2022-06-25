import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import HistorySearchItem from "./HistorySearchItem";
import styles from "../styles";
import { useSelector } from "react-redux";
const dumpData = [
    {
        title: "bàn ikea",
    },
    {
        title: "Rèm",
    },
    {
        title: "Air pod pro",
    },
    {
        title: "Air pod pro 2",
    },
    {
        title: "Air pod pro 3",
    },
    {
        title: "Tai nghe iphone",
    },
    {
        title: "Iphone Xs Max",
    },
];

function LimitedItem({ listSearchProducts }) {
    return (
        <ScrollView>
            {listSearchProducts.map((item, index) => (
                <HistorySearchItem title={item.productName} key={index} />
            ))}
        </ScrollView>
    );
}

function AllItem({ listSearchProducts }) {
    return (
        <ScrollView>
            {listSearchProducts.map((item, index) => (
                <HistorySearchItem title={item.productName} key={index} />
            ))}
        </ScrollView>
    );
}

export default function HistorySearchList() {
    const [showMore, setShowMore] = useState(false);

    const listSearchProducts = useSelector(
        (state) => state.product.listSearchProducts.data
    );

    return (
        <View>
            {showMore ? (
                <LimitedItem listSearchProducts={listSearchProducts} />
            ) : (
                <AllItem listSearchProducts={listSearchProducts} />
            )}
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    showMore ? setShowMore(false) : setShowMore(true);
                }}
            >
                <Text
                    style={[
                        { color: "#737373", textAlign: "center" },
                        styles.pt_5,
                        styles.pb_5,
                    ]}
                >
                    {showMore ? "Hiển thị nhiều hơn" : "Ẩn bớt"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
