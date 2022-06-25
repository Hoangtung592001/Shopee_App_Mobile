import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import SeparateView from "../userComponents/SeparateView";

export default function Order(props) {
    const { orderItem } = props;
    // Chưa sửa

    return (
        <View>
            <View style={[styles.p_10, styles.hr_bottom]}>
                <View style={[styles.flex_row, styles.m_10]}>
                    <View style={[styles.mr_10]}>
                        <Image
                            source={require("../../assets/icon/order_id.png")}
                            style={styles.img_24x24}
                        />
                    </View>
                    <View style={styles.flex_row}>
                        <Text style={{ fontSize: 16, width: "35%" }}>
                            19020376
                        </Text>
                        <View
                            style={[
                                orderItem.status == 1
                                    ? { backgroundColor: "#ff8000" }
                                    : { backgroundColor: "#33cc00" },
                                styles.alignCenterItem,
                                styles.alignCenterItemVertically,
                                { height: 20, width: 160, borderRadius: 10 },
                            ]}
                        >
                            <Text style={{ color: "white" }}>
                                {orderItem.status == 0
                                    ? "Đã hủy đơn"
                                    : orderItem.status == 1
                                    ? "Người bán đang chuẩn bị hàng"
                                    : orderItem.status == 2
                                    ? "Đang vận chuyển"
                                    : "Vận chuyển thành công!"}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.flex_row, styles.m_10]}>
                    <View style={[styles.mr_10]}>
                        <Image
                            source={require("../../assets/icon/order_user.png")}
                            style={styles.img_24x24}
                        />
                    </View>
                    <Text style={{ fontSize: 16, width: "85%" }}>
                        {orderItem.receiverName} - {orderItem.phone}
                    </Text>
                </View>
                <View style={[styles.flex_row, styles.m_10]}>
                    <View style={[styles.mr_10]}>
                        <Image
                            source={require("../../assets/icon/order_location.png")}
                            style={styles.img_24x24}
                        />
                    </View>
                    <Text
                        style={{ fontSize: 16, width: "85%" }}
                        numberOfLines={1}
                    >
                        {orderItem.address}
                    </Text>
                </View>
                <View style={[styles.flex_row, styles.m_10]}>
                    <View style={[styles.mr_10]}>
                        <Image
                            source={require("../../assets/icon/order_product.png")}
                            style={styles.img_24x24}
                        />
                    </View>
                    <Text
                        style={{ fontSize: 16, width: "85%" }}
                        numberOfLines={1}
                    >
                        {orderItem.productNames}
                    </Text>
                </View>
                <View style={[styles.flex_row, styles.m_10]}>
                    <View style={[styles.mr_10]}>
                        <Image
                            source={orderItem.image}
                            style={styles.img_24x24}
                        />
                    </View>
                    <Text
                        style={{ fontSize: 16, width: "85%" }}
                        numberOfLines={1}
                    >
                        Ngày đặt đơn: {orderItem.orderedAt}
                    </Text>
                </View>
                <View style={[styles.flex_row, styles.m_10]}>
                    <View style={[styles.mr_10]}>
                        <Image
                            source={require("../../assets/icon/order_cash.png")}
                            style={styles.img_24x24}
                        />
                    </View>
                    <Text
                        style={{ fontSize: 16, width: "85%" }}
                        numberOfLines={1}
                    >
                        {new Intl.NumberFormat().format(orderItem.totalPrice)}đ
                    </Text>
                </View>
            </View>
            <View style={[styles.flex_row, styles.hr_bottom]}>
                <TouchableOpacity
                    style={[
                        styles.alignCenterItem,
                        styles.alignCenterItemVertically,
                        { height: 30, width: 150 },
                        styles.hr_right,
                    ]}
                    onPress={props.handleConfirmPickUp}
                >
                    <Text>Xác nhận lấy hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.alignCenterItem,
                        styles.alignCenterItemVertically,
                        { height: 30, width: 150 },
                        styles.hr_right,
                    ]}
                    onPress={props.handleConfirmDelivered}
                >
                    <Text>Xác nhận giao hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.alignCenterItem,
                        styles.alignCenterItemVertically,
                        { height: 30, width: 114 },
                    ]}
                    onPress={props.handleCancelOrder}
                >
                    <Text>Huỷ đơn</Text>
                </TouchableOpacity>
            </View>
            <SeparateView />
        </View>
    );
}
