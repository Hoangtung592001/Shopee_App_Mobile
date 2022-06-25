import {
    View,
    Text,
    Image,
    Button,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/actions/orderCartActions";
import { useNavigation } from "@react-navigation/native";

export default function FooterProduct(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    return (
        <View
            style={[
                styles.flex_row,
                { borderColor: "#ccc", borderTopWidth: 1 },
                styles.bg_white,
            ]}
        >
            <TouchableOpacity
                style={[
                    {
                        paddingLeft: 50,
                        paddingRight: 50,
                        marginTop: 15,
                        marginBottom: 15,
                        borderRightColor: "#4d4d4d",
                        borderRightWidth: 1,
                    },
                ]}
            >
                <Image
                    source={require("../../assets/icon/text_message.png")}
                    style={styles.img_32x32}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    {
                        paddingLeft: 50,
                        paddingRight: 50,
                        marginTop: 15,
                        marginBottom: 15,
                    },
                ]}
                onPress={() => {
                    if (!accessToken) {
                        navigation.navigate("LogIn");
                    } else {
                        dispatch(
                            addProductToCart(accessToken, {
                                productCode: props.productCode,
                                quantityOrder: props.quantityOrder,
                            })
                        );
                        alert("This product is added to cart!");
                    }
                }}
            >
                <Image
                    source={require("../../assets/icon/cart.png")}
                    style={styles.img_32x32}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    { width: 150, backgroundColor: "#ff8533" },
                    styles.alignCenterItem,
                    styles.alignCenterItemVertically,
                ]}
                onPress={() => {
                    if (!accessToken) {
                        navigation.navigate("LogIn");
                    } else {
                        const data = {};
                        data[props.shopId.toString()] = [
                            {
                                productCode: props.productCode,
                                quantity: props.quantityOrder,
                                priceEach: props.priceEach,
                            },
                        ];
                        navigation.navigate("ConfirmBuy", {
                            order: {
                                data: data,
                            },
                            totalPrice: props.priceEach,
                        });
                    }
                }}
            >
                <Text style={{ color: "#fff", fontSize: 16 }}>Mua ngay</Text>
            </TouchableOpacity>
        </View>
    );
}
