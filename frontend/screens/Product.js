import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import HeaderProduct from "../components/productComponents/HeaderProduct";
import Carousel from "../components/homeComponents/Carousel";
import FooterProduct from "../components/productComponents/FooterProduct";
import styles from "../components/styles";
import OverviewProduct from "../components/productComponents/OverviewProduct";
import SeparateView from "../components/userComponents/SeparateView";
import AgentIntro from "../components/searchComponents/AgentIntro";
import DescriptionProduct from "../components/productComponents/DescriptionProduct";
import BestSellerList from "../components/productComponents/BestSellerList";
import BriefEvaluation from "../components/productComponents/BriefEvaluation";
import {
    getProductById,
    getProductByUser,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { visitProduct } from "../redux/actions/productActions";
export default function Product({ route }) {
    const productId = route.params.id;
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.productById.data);
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    let images;
    images = [];
    images.push({ sourceIcon: product.image });
    if (product.otherImages) {
        product.otherImages.forEach((image) => {
            images.push({ sourceIcon: image.name });
        });
    }

    useEffect(() => {
        if (accessToken) {
            dispatch(visitProduct(productId, accessToken));
            dispatch(getProductByUser(accessToken, productId));
        } else {
            dispatch(getProductById(productId));
        }
    }, []);
    const orderCart = useSelector((state) => state.orderCart.ordersCart.data);

    return product ? (
        <SafeAreaView style={[styles.bg_white]}>
            <View
                style={{
                    position: "absolute",
                    top: 35,
                    right: 1,
                    left: 1,
                    zIndex: 2,
                }}
            >
                <HeaderProduct numOfProductsInCart={orderCart.length} />
            </View>
            <View style={{ position: "absolute", bottom: 0, zIndex: 1 }}>
                <FooterProduct
                    productCode={product.id}
                    quantityOrder={1}
                    priceEach={product.priceEach}
                    shopId={product.shop.id}
                />
            </View>
            <ScrollView>
                <Carousel listData={images} />
                <OverviewProduct isSale={true} product={product} />
                <SeparateView />
                <AgentIntro shop={product.shop} />
                <SeparateView />
                <BestSellerList products={product.shop.products} />
                <SeparateView />
                <DescriptionProduct product={product} />
                <SeparateView />
                <BriefEvaluation judges={product.judges} />
                <View style={{ height: 30 }} />
            </ScrollView>
        </SafeAreaView>
    ) : null;
}
