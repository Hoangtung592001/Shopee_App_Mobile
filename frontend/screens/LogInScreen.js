import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    Button,
} from "react-native";
import React, { useEffect } from "react";
import styles from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import close_eye_icon from "../assets/icon/close_eye.png";
import open_eye_icon from "../assets/icon/open_eye.png";
import NormalField from "../components/checkInComponents/NormalField";
import PasswordField from "../components/checkInComponents/PasswordField";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";
import { deleteError } from "../redux/actions/errorActions";
export default function LogInScreen() {
    const listData = [
        {
            username: "lecongnam",
            password: "123456",
        },
    ];
    useEffect(() => {
        return () => dispatch(deleteError());
    }, []);
    const error = useSelector((state) => state.error);
    const navigation = useNavigation();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
            <View
                style={[
                    styles.flex_row,
                    {
                        width: "100%",
                        borderBottomColor: "#f2f2f2",
                        borderBottomWidth: 1,
                    },
                    styles.p_15,
                ]}
            >
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                >
                    <Image
                        source={require("../assets/icon/back_arrow.png")}
                        style={styles.img_32x32}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 23, marginLeft: "28%" }}>
                    Đăng nhập
                </Text>
            </View>
            <View
                style={[
                    styles.alignCenterItem,
                    styles.alignCenterItemVertically,
                    { marginTop: 40, marginBottom: 40 },
                ]}
            >
                <Image
                    source={require("../assets/icon/main_logo.png")}
                    style={styles.img_80x80}
                />
            </View>
            <View>
                <View style={[{ margin: 25 }]}>
                    <NormalField
                        plhdTitle="Nhập tên đăng nhập"
                        sourceIcon={require("../assets/icon/account_icon.png")}
                        focus={true}
                        value={username}
                        handleOnChangeText={(text) => setUsername(text)}
                    />
                    <PasswordField
                        plhdTitle="Mật khẩu"
                        value={password}
                        handleOnChangeText={(text) => setPassword(text)}
                    />
                </View>
                <TouchableOpacity
                    style={[
                        {
                            backgroundColor: "#ff8000",
                            height: 40,
                            marginLeft: 25,
                            marginRight: 25,
                        },
                        styles.alignCenterItemVertically,
                    ]}
                    onPress={() => {
                        dispatch(
                            login({
                                email: username,
                                password: password,
                            })
                        );
                        navigation.navigate("Home");
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#fff",
                            fontSize: 18,
                        }}
                    >
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
                <View
                    style={[
                        styles.ml_25,
                        styles.mr_25,
                        styles.mt_20,
                        styles.flex_row,
                        { justifyContent: "flex-end" },
                    ]}
                >
                    <TouchableOpacity
                        style={{ alignSelf: "flex-start", width: "100%" }}
                        onPress={() => {
                            navigation.navigate("SignIn");
                        }}
                    >
                        <Text style={[styles.color_blue, { fontSize: 15 }]}>
                            Đăng ký
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
