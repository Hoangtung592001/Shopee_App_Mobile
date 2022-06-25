import { View, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Header from "../notiComponents/Header";
import CartBill from "./CartBill";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsInCart } from "../../redux/actions/orderCartActions";
import { login } from "../../redux/actions/userActions";
import { changeQuantityProductInCart } from "../../redux/actions/orderCartActions";
import { useNavigation } from "@react-navigation/native";
const filterProductForOrder = (products) => {
    const orders = {};
    products.forEach((product) => {
        if (orders[product.userShop.id.toString()]) {
            orders[product.userShop.id.toString()].push({
                productCode: product.id,
                quantity: product.orderCart.quantityOrder,
            });
        } else {
            orders[product.userShop.id.toString()] = [];
            orders[product.userShop.id.toString()].push({
                productCode: product.id,
                quantity: product.orderCart.quantityOrder,
            });
        }
    });
    return orders;
};

export default function Cart() {
    const navigation = useNavigation();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    if (!accessToken) {
        navigation.navigate("LogIn");
    }
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const orderCart = useSelector((state) => state.orderCart.ordersCart.data);
    let totalValue = 0;
    orderCart.forEach((product) => {
        totalValue += product.priceEach * product.orderCart.quantityOrder;
    });
    const order = {
        address: "368 Đông côi - Thị Trấn Hồ - Thuận Thành - Bắc ninh",
        data: filterProductForOrder(orderCart),
    };
    useEffect(() => {
        dispatch(getAllProductsInCart(user.token.refreshToken));
    }, []);
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={orderCart}
                    renderItem={({ item, index }) => (
                        <CartItem
                            sourceIcon={item.image}
                            description={item.productName}
                            shopName={item.userShop.shopName}
                            price={item.priceEach}
                            key={item.id}
                            quantity={item.orderCart.quantityOrder}
                            handleClickMinus={() => {
                                const props = {
                                    productCode: orderCart[index].id,
                                    quantity:
                                        orderCart[index].orderCart
                                            .quantityOrder - 1,
                                };
                                dispatch(
                                    changeQuantityProductInCart(
                                        accessToken,
                                        orderCart,
                                        props
                                    )
                                );
                            }}
                            handleClickPlus={() => {
                                const props = {
                                    productCode: orderCart[index].id,
                                    quantity:
                                        orderCart[index].orderCart
                                            .quantityOrder + 1,
                                };
                                dispatch(
                                    changeQuantityProductInCart(
                                        accessToken,
                                        orderCart,
                                        props
                                    )
                                );
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={
                        <Header title="Giỏ hàng" canBack={true} />
                    }
                    stickyHeaderIndices={[0]}
                    ListFooterComponent={<View style={{ height: 100 }}></View>}
                />
            </View>
            <CartBill order={order} totalValue={totalValue} summit={false} />
        </SafeAreaView>
    );
}
