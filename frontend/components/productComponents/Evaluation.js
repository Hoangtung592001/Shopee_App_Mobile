import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles";
import RatingStar from "./RatingStar";

export default function Evaluation({ judge }) {
    return (
        <View style={[styles.p_15, styles.flex_row, styles.hr_bottom]}>
            <View style={{ paddingRight: 15 }}>
                <Image
                    source={{ uri: judge.user.image }}
                    style={[styles.img_32x32, styles.rounded]}
                />
            </View>
            <View style={{ width: "85%" }}>
                <Text style={styles.pb_10}>{judge.user.username}</Text>
                <RatingStar stars={judge.stars} />
                <Text style={[styles.pb_10, styles.pt_10]}>
                    {judge.content}
                </Text>
                <Text style={{ color: "#404040" }}>{judge.updatedAt}</Text>
            </View>
        </View>
    );
}
