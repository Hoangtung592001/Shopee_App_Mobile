import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import tshirtIcon from "../../assets/icon/T_shirt2.png";
import styles from "../styles";
import MoreProductItem from "./MoreProductItem";

export default function HorizontalProductList({ mostNumberOfPurchases }) {
    return mostNumberOfPurchases ? (
        <ScrollView
            style={[
                styles.border_top,
                styles.pt_10,
                styles.pb_10,
                styles.flex_row,
            ]}
            horizontal={true}
        >
            {mostNumberOfPurchases.map((product) => (
                <ProductItem
                    sourceImage={product.image}
                    numberOfPurchases={product.numberOfPurchases}
                    price={new Intl.NumberFormat().format(product.priceEach)}
                    key={product.id}
                />
            ))}
            <MoreProductItem />
        </ScrollView>
    ) : null;
}
