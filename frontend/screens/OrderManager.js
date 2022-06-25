import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/notiComponents/Header";
import Order from "../components/shopComponents/Order";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getUserOrders,
    updateOrderStatusByOwner,
} from "../redux/actions/userActions";
import { deleteError } from "../redux/actions/errorActions";
import { sendNotification } from "../redux/actions/notificationActions";
export default function OrderManager() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const userOrders = useSelector((state) => state.user.userOrders);
    const error = useSelector((state) => state.error);
    if (!error.success) {
        alert(error.message);
    }
    useEffect(() => {
        return () => dispatch(deleteError());
    }, []);
    useEffect(() => {
        dispatch(getUserOrders(accessToken));
    }, []);
    const convertedUserOrders = userOrders.map((order) => {
        const { orderDetails, ...returns } = order;
        let totalPrice = 0;
        let productNames = "";
        orderDetails.forEach((orderDetail) => {
            totalPrice += orderDetail.priceEach * orderDetail.quantityOrder;
            productNames =
                productNames +
                `${orderDetail.product.productName} x ${orderDetail.quantityOrder}\n`;
        });
        returns.totalPrice = totalPrice;
        returns.productNames = productNames;
        return returns;
    });
    const [listData, setListData] = useState([
        {
            id: 1,
            customerName: "Lê Công Nam",
            customerPhoneNumber: "0335927773",
            customerAddress:
                "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
            productName: "Áo thun vjppr0",
            productQuantity: 3,
            orderDate: "14/4/2021",
            priceEach: 100000,
            state: "Chờ lấy hàng",
        },
        {
            id: 2,
            customerName: "Lê Công Nam",
            customerPhoneNumber: "0335927773",
            customerAddress:
                "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
            productName: "Áo thun vjppr0",
            productQuantity: 3,
            orderDate: "14/4/2021",
            priceEach: 100000,
            state: "Chờ lấy hàng",
        },
        {
            id: 3,
            customerName: "Lê Công Nam",
            customerPhoneNumber: "0335927773",
            customerAddress:
                "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
            productName: "Áo thun vjppr0",
            productQuantity: 3,
            orderDate: "14/4/2021",
            priceEach: 100000,
            state: "Chờ lấy hàng",
        },
        {
            id: 4,
            customerName: "Lê Công Nam",
            customerPhoneNumber: "0335927773",
            customerAddress:
                "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
            productName: "Áo thun vjppr0",
            productQuantity: 3,
            orderDate: "14/4/2021",
            priceEach: 100000,
            state: "Chờ lấy hàng",
        },
        {
            id: 5,
            customerName: "Lê Công Nam",
            customerPhoneNumber: "0335927773",
            customerAddress:
                "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
            productName: "Áo thun vjppr0",
            productQuantity: 3,
            orderDate: "14/4/2021",
            priceEach: 100000,
            state: "Chờ lấy hàng",
        },
        {
            id: 6,
            customerName: "Lê Công Nam",
            customerPhoneNumber: "0335927773",
            customerAddress:
                "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
            productName: "Áo thun vjppr0",
            productQuantity: 3,
            orderDate: "14/4/2021",
            priceEach: 100000,
            state: "Chờ lấy hàng",
        },
        {
            id: 7,
            customerName: "Lê Công Nam",
            customerPhoneNumber: "0335927773",
            customerAddress:
                "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
            productName: "Áo thun vjppr0",
            productQuantity: 3,
            orderDate: "14/4/2021",
            priceEach: 100000,
            state: "Chờ lấy hàng",
        },
    ]);
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
            <Header title={"Quản lý đơn hàng"} canBack={true} />
            <ScrollView>
                {convertedUserOrders.map((item, index) => (
                    <Order
                        key={index}
                        orderItem={item}
                        handleConfirmPickUp={() => {
                            dispatch(
                                updateOrderStatusByOwner(accessToken, {
                                    orderId: item.id,
                                    status: 2,
                                })
                            );
                            dispatch(
                                sendNotification(accessToken, {
                                    receiverId: item.customerId,
                                    status: 2,
                                    orderId: item.id,
                                })
                            );
                        }}
                        handleConfirmDelivered={() => {
                            dispatch(
                                updateOrderStatusByOwner(accessToken, {
                                    orderId: item.id,
                                    status: 3,
                                })
                            );
                            dispatch(
                                sendNotification(accessToken, {
                                    receiverId: item.customerId,
                                    status: 3,
                                    orderId: item.id,
                                })
                            );
                        }}
                        handleCancelOrder={() => {
                            dispatch(
                                updateOrderStatusByOwner(accessToken, {
                                    orderId: item.id,
                                    status: 0,
                                })
                            );
                            dispatch(
                                sendNotification(accessToken, {
                                    receiverId: item.customerId,
                                    status: 0,
                                    orderId: item.id,
                                })
                            );
                        }}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
