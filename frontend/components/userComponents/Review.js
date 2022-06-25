import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../styles";
import RatingStar from "../productComponents/RatingStar";
import { useNavigation } from "@react-navigation/native";

export default function Review(props) {
    const { review } = props;
    const navigation = useNavigation();
    // Chưa sửa
    return (
        <View style={[styles.hr_light_bottom, { paddingBottom: 10 }]}>
            <View style={[styles.flex_row, styles.p_10]}>
                <View style={styles.pr_15}>
                    <Image
                        source={{
                            uri: review.member.image,
                        }}
                        style={[styles.img_24x24, styles.rounded]}
                    />
                </View>
                <View style={{ width: "90%" }}>
                    <Text style={styles.mb_5}>{review.member.username}</Text>
                    <RatingStar stars={review.stars} />
                    <Text
                        style={[styles.mb_5, styles.mt_5, { color: "#737373" }]}
                    >{`${review.createdAt}`}</Text>
                    <Text style={styles.mb_5}>{review.content}</Text>
                    <TouchableOpacity
                        style={styles.flex_row}
                        onPress={props.handleClickProduct}
                    >
                        <Image
                            source={{
                                uri: review.product.image,
                            }}
                            style={styles.img_48x48}
                        />
                        <View
                            style={[
                                styles.alignCenterItemVertically,
                                {
                                    height: 48,
                                    width: "80%",
                                    backgroundColor: "#f2f2f2",
                                    paddingLeft: 20,
                                },
                            ]}
                        >
                            <Text
                                style={{ fontWeight: "bold", paddingRight: 10 }}
                                numberOfLines={1}
                            >
                                {review.product.productName}{" "}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
