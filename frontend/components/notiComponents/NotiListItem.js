import { View, Text } from "react-native";
import React, { useEffect } from "react";
import NotiItem from "./NotiItem";
import styles from "../styles";
import SeparateView from "../userComponents/SeparateView";
import { useSelector, useDispatch } from "react-redux";
import { getNotifications } from "../../redux/actions/notificationActions";
export default function NotiListItem() {
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const dispatch = useDispatch();
    const notifications = useSelector(
        (state) => state.notification.notifications
    );
    useEffect(() => {
        dispatch(getNotifications(accessToken));
    }, []);
    return notifications.length > 0 ? (
        <View>
            <SeparateView />
            <Text style={[styles.ml_10, styles.mt_10, styles.mb_10]}>
                Cập nhật đơn hàng
            </Text>
            {notifications.map((notification, index) => (
                <NotiItem key={index} notification={notification} />
            ))}
        </View>
    ) : null;
}
