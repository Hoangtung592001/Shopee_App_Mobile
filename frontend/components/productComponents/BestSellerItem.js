import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles";
import RatingStar from "./RatingStar";

export default function BestSellerItem(props) {
    const { item } = props;
    let stars = 0;
    if (item) {
        item.judges.forEach((judge) => {
            stars += judge.stars;
        });
        stars = stars / item.length;
    }

    return (
        <View
            style={{
                width: 126,
                borderColor: "#d9d9d9",
                borderWidth: 1,
                marginRight: 5,
                marginLeft: 5,
            }}
        >
            <Image
                source={{ uri: item.image }}
                style={[styles.img_124x124, { resizeMode: "contain" }]}
            />
            <View
                style={[styles.mt_10, styles.ml_5, styles.mr_5, styles.mb_10]}
            >
                <Text numberOfLines={2} style={{ fontSize: 13 }}>
                    {item.productName}
                </Text>
                <Text style={[{ color: "red" }, styles.mt_5, styles.mb_5]}>
                    {new Intl.NumberFormat().format(item.priceEach)}đ
                </Text>
                <RatingStar stars={stars} />
                <Text style={{ fontSize: 12, color: "#333", marginTop: 5 }}>
                    Đã bán {item.soldQuantity}
                </Text>
            </View>
        </View>
    );
}
