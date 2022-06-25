import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import styles from "../styles";
import SeparateView from "../userComponents/SeparateView";

const { width } = Dimensions.get("window");

export default function NotiItem({ notification }) {
    return (
        <View>
            <View
                style={[
                    styles.flex_row,
                    styles.bg_white,
                    { borderTopWidth: 1, borderTopColor: "#ccc" },
                ]}
            >
                <Image
                    source={{ uri: notification.member.image }}
                    style={{ width: 60, height: 60, resizeMode: "contain" }}
                />
                <View style={{ width: width - 60 }}>
                    <Text style={[styles.p_5]}>
                        {notification.notificationTypeId == 0
                            ? "Đã hủy đơn"
                            : notification.notificationTypeId == 1
                            ? "Người bán đang chuẩn bị hàng"
                            : notification.notificationTypeId == 2
                            ? "Đang vận chuyển"
                            : "Vận chuyển thành công!"}
                    </Text>
                    <Text style={[styles.p_5, { color: "#808080" }]}>
                        Đơn hàng
                        <Text style={{ color: "#00bfff" }}>
                            {" "}
                            {notification.id}{" "}
                        </Text>
                        {notification.notificationTypeId == 0
                            ? "đã được hủy."
                            : notification.notificationTypeId == 1
                            ? "đã được người bán chấp nhận và người bán đang chuẩn bị gửi hàng cho đơn vị vận chuyển!"
                            : notification.notificationTypeId == 2
                            ? "đang được vận chuyển tới nơi người nhận!"
                            : "đã được vận chuyển thành công! Vui lòng kiểm tra đơn hàng!"}
                    </Text>
                    <Text
                        style={[styles.p_5, { color: "#a9a9a9", fontSize: 12 }]}
                    >
                        {notification.createdAt}
                    </Text>
                </View>
            </View>
        </View>
    );
}
