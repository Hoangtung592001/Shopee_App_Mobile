import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/notiComponents/Header";
import ListFilterItem from "../components/billStatusComponents/ListFilterItem";
import RecommendItem from "../components/homeComponents/RecommendItem";
import ItemStatus from "../components/billStatusComponents/ItemStatus";
import SeparateView from "../components/userComponents/SeparateView";
import { useNavigation } from "@react-navigation/native";
import FilterItem from "../components/billStatusComponents/FilterItem";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";
import { calcelOrder } from "../redux/actions/orderActions";
export default function BillStatus({ route }) {
    const navigation = useNavigation();
    const orderedProducts = useSelector((state) => state.product.infoOrders);
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const dispatch = useDispatch();
    const deletedOrders = orderedProducts.orders.deletedOrders;
    const deliveredProducts = orderedProducts.orders.deliveredProducts;
    const deliveringOrders = orderedProducts.orders.deliveringOrders;
    const waitingForDeliveringProducts =
        orderedProducts.orders.waitingForDeliveringProducts;
    const [listCategory, setListCategory] = useState([
        {
            id: 1,
            title: "Chờ lấy hàng",
            active: route.params?.activePage == 1 ? true : false,
        },
        {
            id: 2,
            title: "Đang giao",
            active: route.params?.activePage == 2 ? true : false,
        },
        {
            id: 3,
            title: "Đã giao",
            active: route.params?.activePage == 3 ? true : false,
        },
        {
            id: 0,
            title: "Đã huỷ",
            active: route.params?.activePage == 0 ? true : false,
        },
    ]);
    const [activePage, setActivePage] = useState(route.params.activePage);
    let listProducts = waitingForDeliveringProducts;
    if (activePage == 0) {
        listProducts = deletedOrders;
    } else if (activePage == 2) {
        listProducts = deliveringOrders;
    } else if (activePage == 3) {
        listProducts = deliveredProducts;
    }
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
            <Header title={"Đơn mua"} canBack={true} />

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {listCategory.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={1}
                        onPress={() => {
                            setActivePage(item.id);
                            setListCategory(
                                listCategory.map((subItem, subIndex) => {
                                    if (subItem.id == item.id) {
                                        return { ...subItem, active: true };
                                    } else {
                                        return { ...subItem, active: false };
                                    }
                                })
                            );
                        }}
                    >
                        <FilterItem
                            title={item.title}
                            active={item.active}
                            pl={20}
                            pr={21}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView>
                <SeparateView />
                {listProducts.map((item, index) => (
                    <ItemStatus
                        key={index}
                        shopName={item?.product?.shop?.shopName}
                        uriImg={item?.product?.image}
                        productName={item?.product?.productName}
                        quantity={item?.quantityOrder}
                        priceEach={item?.priceEach}
                        status={activePage}
                        handlePress={() => {
                            navigation.navigate("Review", { item: item });
                        }}
                        handleCancel={() => {
                            Alert.alert(
                                "Cảnh báo",
                                "Bạn có chắc chắn muốn hủy đơn hàng này không ?",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () =>
                                            console.log("Cancel Pressed"),
                                        style: "cancel",
                                    },
                                    {
                                        text: "OK",
                                        onPress: () => {
                                            dispatch(
                                                calcelOrder(
                                                    accessToken,
                                                    item.orderId
                                                )
                                            );
                                            navigation.navigate("Home");
                                        },
                                    },
                                ]
                            );
                        }}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
