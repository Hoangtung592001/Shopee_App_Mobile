import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

export default function DescriptionProduct({ product }) {
    return (
        <View>
            <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}>
                <Text style={[{ fontWeight: "bold" }, styles.p_10]}>
                    Chi tiết sản phẩm
                </Text>
            </View>
            <View>
                <Text style={styles.p_10}>{product.description}</Text>
            </View>
        </View>
    );
}
