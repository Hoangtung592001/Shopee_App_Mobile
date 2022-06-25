import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import PromoIcon from "../homeComponents/PromoIcon";
import RatingStar from "./RatingStar";
import basic_heart from "../../assets/icon/basic_heart.png";
import blank_heart from "../../assets/icon/blank_heart.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeOrDislikeProduct } from "../../redux/actions/productActions";
import { useNavigation } from "@react-navigation/native";
export default function OverviewProduct(props) {
    let stars = 0;
    if (props) {
        props.product.judges.forEach((judge) => {
            stars += judge.stars;
        });
        stars = stars / props.product.judges.length;
    }
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    return props ? (
        <View style={[styles.m_10, styles.bg_white]}>
            <View
                style={[
                    props.isSale ? { width: "85%" } : { width: "95%" },
                    styles.flex_row,
                ]}
            >
                <Text numberOfLines={2} style={{ fontSize: 17 }}>
                    {props.product.productName}
                </Text>
                {props.isSale ? (
                    <View style={[styles.pl_15, styles.pr_15]}>
                        <PromoIcon discount={props.product.discount} />
                    </View>
                ) : null}
            </View>
            <View style={[styles.mt_15, styles.mb_20]}>
                <Text style={{ color: "red", fontSize: 20 }}>
                    {new Intl.NumberFormat().format(props.product.priceEach)}đ
                </Text>
                <Text
                    style={{
                        color: "#4d4d4d",
                        fontSize: 16,
                        textDecorationLine: "line-through",
                        paddingTop: 5,
                    }}
                >
                    700.000đ
                </Text>
            </View>
            <View style={styles.flex_row}>
                <RatingStar stars={stars ? stars : 0} size={16} />
                <View style={{ borderRightColor: "#ccc", borderRightWidth: 1 }}>
                    <Text
                        style={[styles.pl_10, styles.pr_10, { fontSize: 15 }]}
                    >
                        {stars ? stars : 0}
                    </Text>
                </View>
                <Text style={styles.pl_15}>
                    Đã bán {props.product.soldQuantity}
                </Text>
                <TouchableOpacity
                    style={{ position: "absolute", right: 10, bottom: -2 }}
                    activeOpacity={1}
                    onPress={() => {
                        if (!accessToken) {
                            navigation.navigate("LogIn");
                        } else {
                            dispatch(
                                likeOrDislikeProduct(
                                    accessToken,
                                    props.product.id,
                                    !!!props.product.like
                                )
                            );
                        }
                    }}
                >
                    <Image
                        source={props.product.like ? basic_heart : blank_heart}
                        style={styles.img_24x24}
                    />
                </TouchableOpacity>
            </View>
        </View>
    ) : null;
}
