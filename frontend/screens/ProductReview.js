import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import { useSelector, useDispatch } from "react-redux";
import { postJudge } from "../redux/actions/judgeActions";
import { useNavigation } from "@react-navigation/native";
export default function ProductReview({ route }) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const order = route.params.item;
    const [numberOfStars, setNumberOfStars] = useState(5);
    const [review, setReview] = useState("");
    // Chưa sửa
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
            <Header title={"Đánh giá sản phẩm"} canBack={true} />
            <View
                style={[
                    { padding: 10 },
                    styles.flex_row,
                    styles.hr_light_bottom,
                ]}
            >
                <Image
                    source={{ uri: order.product.image }}
                    style={styles.img_40x40}
                />
                <Text
                    style={{ marginLeft: 10, top: 10, width: "80%" }}
                    numberOfLines={1}
                >
                    {order.product.productName}
                </Text>
            </View>
            <View
                style={[
                    styles.flex_row,
                    styles.alignCenterItem,
                    styles.alignCenterItemVertically,
                    { marginTop: 30, marginBottom: 30 },
                ]}
            >
                <TouchableOpacity
                    style={[styles.ml_5, styles.mr_5]}
                    activeOpacity={1}
                    onPress={() => {
                        setNumberOfStars(1);
                    }}
                >
                    <Image
                        source={
                            numberOfStars >= 1
                                ? require("../assets/icon/1star.png")
                                : require("../assets/icon/noneStar.png")
                        }
                        style={styles.img_32x32}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.ml_5, styles.mr_5]}
                    activeOpacity={1}
                    onPress={() => {
                        setNumberOfStars(2);
                    }}
                >
                    <Image
                        source={
                            numberOfStars >= 2
                                ? require("../assets/icon/1star.png")
                                : require("../assets/icon/noneStar.png")
                        }
                        style={styles.img_32x32}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.ml_5, styles.mr_5]}
                    activeOpacity={1}
                    onPress={() => {
                        setNumberOfStars(3);
                    }}
                >
                    <Image
                        source={
                            numberOfStars >= 3
                                ? require("../assets/icon/1star.png")
                                : require("../assets/icon/noneStar.png")
                        }
                        style={styles.img_32x32}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.ml_5, styles.mr_5]}
                    activeOpacity={1}
                    onPress={() => {
                        setNumberOfStars(4);
                    }}
                >
                    <Image
                        source={
                            numberOfStars >= 4
                                ? require("../assets/icon/1star.png")
                                : require("../assets/icon/noneStar.png")
                        }
                        style={styles.img_32x32}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.ml_5, styles.mr_5]}
                    activeOpacity={1}
                    onPress={() => {
                        setNumberOfStars(5);
                    }}
                >
                    <Image
                        source={
                            numberOfStars >= 5
                                ? require("../assets/icon/1star.png")
                                : require("../assets/icon/noneStar.png")
                        }
                        style={styles.img_32x32}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này nhé"
                    style={{
                        backgroundColor: "#f2f2f2",
                        height: 150,
                        marginLeft: 20,
                        marginRight: 20,
                        padding: 10,
                        paddingTop: 10,
                        fontSize: 16,
                    }}
                    multiline={true}
                    value={review}
                    onChangeText={(txt) => setReview(txt)}
                />
            </View>
            <TouchableOpacity
                style={[
                    {
                        marginLeft: 40,
                        marginTop: 20,
                        marginRight: 40,
                        backgroundColor: "#66b3ff",
                        borderRadius: 10,
                        height: 30,
                    },
                    styles.alignCenterItem,
                    styles.alignCenterItemVertically,
                ]}
                onPress={() => {
                    dispatch(
                        postJudge(accessToken, {
                            content: review,
                            stars: numberOfStars,
                            productCode: order?.product?.id,
                        })
                    );
                    navigation.navigate("Home");
                }}
            >
                <Text style={{ color: "#fff" }}>Lưu</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
