import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/notiComponents/Header";
import Review from "../components/userComponents/Review";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getJudges } from "../redux/actions/judgeActions";
export default function MyReview() {
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const dispatch = useDispatch();
    const myJudges = useSelector((state) => state.judge.myJudges);
    useEffect(() => {
        dispatch(getJudges(accessToken));
    }, []);
    const listData = [
        {
            username: "lecongnam",
            uriAvtUser:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            numberOfStars: 3.5,
            date: "19/02/2022",
            hour: "10:20",
            comment:
                "Sản phẩm dùng tốt. Shop tư vấn nhiệt tình. Cảm ơn shop nhiều <3",
            uriAvtProduct:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            productName: "Áo vjppro 123 1 23 124 1 234 1234 141234j1i2 14",
            idProduct: 1,
        },
        {
            username: "lecongnam",
            uriAvtUser:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            numberOfStars: 5,
            date: "19/02/2022",
            hour: "10:20",
            comment:
                "Sản phẩm dùng tốt. Shop tư vấn nhiệt tình. Cảm ơn shop nhiều2",
            uriAvtProduct:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            productName: "Áo vjppro 123 1 23 124 1 234 1234 141234j1i2 14",
            idProduct: 2,
        },
        {
            username: "lecongnam",
            uriAvtUser:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            numberOfStars: 5,
            date: "19/02/2022",
            hour: "10:20",
            comment:
                "Sản phẩm dùng tốt. Shop tư vấn nhiệt tình. Cảm ơn shop nhiều <3",
            uriAvtProduct:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            productName: "Áo vjppro 123 1 23 124 1 234 1234 141234j1i2 14",
            idProduct: 3,
        },
        {
            username: "lecongnam",
            uriAvtUser:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            numberOfStars: 5,
            date: "19/02/2022",
            hour: "10:20",
            comment:
                "Sản phẩm dùng tốt. Shop tư vấn nhiệt tình. Cảm ơn shop nhiều <3",
            uriAvtProduct:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            productName: "Áo vjppro 123 1 23 124 1 234 1234 141234j1i2 14",
            idProduct: 4,
        },
        {
            username: "lecongnam",
            uriAvtUser:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            numberOfStars: 5,
            date: "19/02/2022",
            hour: "10:20",
            comment:
                "Sản phẩm dùng tốt. Shop tư vấn nhiệt tình. Cảm ơn shop nhiều <3",
            uriAvtProduct:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            productName: "Áo vjppro 123 1 23 124 1 234 1234 141234j1i2 14",
            idProduct: 5,
        },
        {
            username: "lecongnam",
            uriAvtUser:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            numberOfStars: 5,
            date: "19/02/2022",
            hour: "10:20",
            comment:
                "Sản phẩm dùng tốt. Shop tư vấn nhiệt tình. Cảm ơn shop nhiều <3",
            uriAvtProduct:
                "https://xachtayonline-vn.s3.ap-southeast-1.amazonaws.com/product_images/1582710323jklzy-ao-thun-nu-co-tron-uniqlo-jean-michel-427014-1.jpg",
            productName: "Áo vjppro 123 1 23 124 1 234 1234 141234j1i2 14",
            idProduct: 6,
        },
    ];
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
            <Header title={"Đánh giá của tôi"} canBack={true} />
            <ScrollView>
                {myJudges.map((item, index) => (
                    <Review
                        key={index}
                        review={item}
                        handleClickProduct={() => {
                            navigation.navigate("Product", {
                                id: item.product.id,
                            });
                        }}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
