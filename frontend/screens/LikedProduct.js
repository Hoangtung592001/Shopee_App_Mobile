import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/notiComponents/Header";
import { FlatList } from "react-native-gesture-handler";
import RecommendItem from "../components/homeComponents/RecommendItem";
import { useDispatch, useSelector } from "react-redux";
import { getLikedProducts } from "../redux/actions/productActions";
export default function LikedProduct() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const likedProducts = useSelector((state) => state.product.likedProducts);

    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
            <Header title={"Sản phẩm đã thích"} canBack={true} />
            <FlatList
                data={likedProducts.data}
                renderItem={({ item }) => (
                    <RecommendItem recommendItem={item} containRating={false} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
}
