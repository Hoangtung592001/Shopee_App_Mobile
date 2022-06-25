import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import UserOptionTag from "../components/userComponents/UserOptionTag";
import SeparateView from "../components/userComponents/SeparateView";
import { useNavigation } from "@react-navigation/native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalInfo, logOut } from "../redux/actions/userActions";
export default function EditInfoScreen() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    const personalInfo = useSelector((state) => state.user.info);
    useEffect(() => {
        dispatch(getPersonalInfo(accessToken));
    }, []);
    const navigation = useNavigation();
    const [openDob, setOpenDob] = useState(false);
    const [selectedGender, setSelectedGender] = useState();
    const [date, setDate] = useState(new Date());
    const [openGender, setOpenGender] = useState(false);
    const [dob, setDob] = useState(
        personalInfo.dateOfBirth ? personalInfo.dateOfBirth : null
    );
    const [gender, setGender] = useState(
        personalInfo.gender ? personalInfo.gender : null
    );
    return (
        <SafeAreaView style={[{ backgroundColor: "#fff", height: "100%" }]}>
            <Header title={"Sửa hồ sơ"} canBack={true} />
            <View
                style={[
                    { height: 150, backgroundColor: "#99ddff" },
                    styles.alignCenterItem,
                    styles.alignCenterItemVertically,
                ]}
            >
                <Image
                    source={{ uri: personalInfo.image }}
                    style={styles.img_64x64}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("EditName", {
                        name: personalInfo.username,
                    });
                }}
            >
                <UserOptionTag
                    title={"Tên"}
                    description={
                        personalInfo.username == null
                            ? null
                            : personalInfo.username
                    }
                    containIcon={false}
                />
            </TouchableOpacity>
            <UserOptionTag
                title={"Tên đăng nhập"}
                description={personalInfo.email}
                containIcon={false}
                containRightArrow={false}
            />
            <SeparateView />
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    setOpenDob(false);
                    setOpenGender(true);
                }}
            >
                <UserOptionTag
                    title={"Giới tính"}
                    description={personalInfo.gender == 1 ? "Nam" : "Nữ"}
                    containIcon={false}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setOpenGender(false);
                    setOpenDob(true);
                }}
                activeOpacity={1}
            >
                <UserOptionTag
                    title={"Ngày sinh"}
                    description={personalInfo.dateOfBirth}
                    containIcon={false}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("EditPhoneNumber", {
                        phoneNumber: personalInfo.phone,
                    });
                }}
            >
                <UserOptionTag
                    title={"Số điện thoại"}
                    description={
                        personalInfo.phone == null ? null : personalInfo.phone
                    }
                    containIcon={false}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("EditAddress", {
                        address: personalInfo.address,
                    });
                }}
            >
                <UserOptionTag
                    title={"Địa chỉ"}
                    description={
                        personalInfo.address == null
                            ? null
                            : personalInfo.address
                    }
                    containIcon={false}
                />
            </TouchableOpacity>
            <SeparateView />
            <TouchableOpacity
                style={styles.hr_bottom}
                onPress={() => {
                    navigation.navigate("EditPassword");
                }}
            >
                <UserOptionTag
                    title={"Thay đổi mật khẩu"}
                    containIcon={false}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.alignCenterItem,
                    styles.alignCenterItemVertically,
                    { height: 40, backgroundColor: "#ff6600", margin: 20 },
                ]}
                onPress={() => {
                    dispatch(logOut());
                    navigation.navigate("Home");
                }}
            >
                <View>
                    <Text style={{ fontSize: 16, color: "#fff" }}>
                        Đăng xuất
                    </Text>
                </View>
            </TouchableOpacity>
            {openDob ? (
                <View
                    style={{
                        borderTopColor: "#ccc",
                        borderTopWidth: 1,
                        paddingTop: 10,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setOpenDob(false);
                            setDob(date.toLocaleDateString("vi-VN"));
                        }}
                        style={{ alignItems: "flex-end" }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#3399ff",
                                paddingRight: 10,
                            }}
                        >
                            Done
                        </Text>
                    </TouchableOpacity>
                    <RNDateTimePicker
                        mode="date"
                        value={date}
                        dateFormat={"day month year"}
                        onChange={(event, date) => {
                            setDate(date);
                        }}
                        display={"spinner"}
                    />
                </View>
            ) : null}
            {openGender ? (
                <View
                    style={{
                        borderTopColor: "#ccc",
                        borderTopWidth: 1,
                        paddingTop: 10,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setOpenGender(false);
                            setGender(selectedGender);
                        }}
                        style={{ alignItems: "flex-end" }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#3399ff",
                                paddingRight: 10,
                            }}
                        >
                            Done
                        </Text>
                    </TouchableOpacity>
                    <Picker
                        selectedValue={selectedGender}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedGender(itemValue);
                        }}
                    >
                        <Picker.Item label="Nam" value={"Nam"} />
                        <Picker.Item label="Nữ" value={"Nữ"} />
                        <Picker.Item label="Khác" value={"Khác"} />
                    </Picker>
                </View>
            ) : null}
        </SafeAreaView>
    );
}
