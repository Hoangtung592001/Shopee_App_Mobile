import React from "react";
import {
    Text,
    Image,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import UserImage from "../../assets/icon/user.png";
import styles from "../styles";
import SeparateView from "./SeparateView";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
export default function HeaderUser({ username }) {
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.mainHeader, styles.mt_20]}>
                <TouchableOpacity
                    onPress={() => {
                        if (accessToken) {
                            navigation.navigate("Home");
                        } else {
                            navigation.navigate("LogIn");
                        }
                    }}
                >
                    <Image source={UserImage} style={styles.userImage} />
                </TouchableOpacity>
                <View style={styles.ml_10}>
                    <Text style={[styles.userName, styles.bold]}>
                        {username}
                    </Text>
                    <Text style={styles.bottom}>
                        <Text>Người theo dõi</Text>
                        <Text style={styles.bold}> 0</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
