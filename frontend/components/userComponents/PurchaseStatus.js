import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles";
import StateItem from "./StateItem";
import pendingIcon from "../../assets/icon/pendingConfirm.png";
import waitingIcon from "../../assets/icon/waiting.png";
import shippingIcon from "../../assets/icon/shipping.png";
import reviewIcon from "../../assets/icon/review.png";
import cancelBill from "../../assets/icon/cancelBill.png";
import packageIcon from "../../assets/icon/package.png";

export default function PurchaseStatus({
    deletedOrders,
    deliveringOrders,
    waitingForDeliveringProducts,
    deliveredProducts,
}) {
    return (
        <View style={[styles.borderTop, styles.flex_row, styles.width_100]}>
            <StateItem
                sourceIcon={waitingIcon}
                title={"Chờ lấy hàng"}
                numOfProductsInCart={
                    waitingForDeliveringProducts
                        ? waitingForDeliveringProducts.length
                        : 0
                }
                activePage={1}
            />
            <StateItem
                sourceIcon={shippingIcon}
                title={"Đang giao"}
                numOfProductsInCart={
                    deliveringOrders ? deliveringOrders.length : 0
                }
                activePage={2}
            />
            <StateItem
                sourceIcon={packageIcon}
                title={"Đã giao"}
                numOfProductsInCart={
                    deliveredProducts ? deliveredProducts.length : 0
                }
                activePage={3}
            />
            <StateItem
                sourceIcon={cancelBill}
                title={"Đã huỷ"}
                numOfProductsInCart={deletedOrders ? deletedOrders.length : 0}
                activePage={0}
            />
        </View>
    );
}
