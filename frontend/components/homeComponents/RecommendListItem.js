import { View, FlatList, Button, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import RecommendItem from "./RecommendItem";
import RecommendToday from "./RecommendToday";
import SearchForm from "./SearchForm";
import BottomNavigator from "../Navigator/BottomNavigator";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { useIsFocused } from "@react-navigation/native";
import { getNotifications } from "../../redux/actions/notificationActions";
import { getAllProductsInCart } from "../../redux/actions/orderCartActions";
export default function RecommendListItem({ navigation, route }) {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const products = useSelector((state) => state.product.allProducts);
    const isFocused = useIsFocused();
    useEffect(() => {
        dispatch(getProducts(1));
        if (accessToken) {
            dispatch(getNotifications(accessToken));
            dispatch(getAllProductsInCart(accessToken));
        }
    }, [isFocused]);

    return (
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
            <SearchForm width={"85%"} />
            <BottomNavigator height={150} currentActive={"Home"} />
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <RecommendItem recommendItem={item} containRating={false} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={true}
                ListHeaderComponent={RecommendToday}
                ListFooterComponent={<View style={{ height: 110 }} />}
            />
        </SafeAreaView>
    );
}
