import { TouchableOpacity, ScrollView, View, SafeAreaView } from "react-native";
import HeaderUser from "./HeaderUser";
import UserOptionTag from "./UserOptionTag";
import record from "../../assets/icon/icon_record.png";
import store from "../../assets/icon/store.png";
import PurchaseStatus from "./PurchaseStatus";
import bagIcon from "../../assets/icon/bag.png";
import HorizontalProductList from "./HorizontalProductList";
import SeparateView from "./SeparateView";
import heartIcon from "../../assets/icon/heart.png";
import clockIcon from "../../assets/icon/clock.png";
import starIcon from "../../assets/icon/star.png";
import profileIcon from "../../assets/icon/profile.png";
import { useNavigation } from "@react-navigation/native";
import BottomNavigator from "../Navigator/BottomNavigator";
import { useDispatch, useSelector } from "react-redux";
import { getLikedProducts } from "../../redux/actions/productActions";
import { useEffect } from "react";
import {
    getInfoOrder,
    getProgressOrder,
} from "../../redux/actions/productActions";
import { getPersonalInfo } from "../../redux/actions/userActions";
import { OrderStatus } from "../../types/enums";
import { mergeSort } from "../../helpers/utils";
const handleHorizontalProductList = (deliveredProducts) => {
    const orders = {};
    deliveredProducts.forEach((order) => {
        const productId = order?.product.id.toString();
        if (orders[productId]) {
            const temp = orders[productId];
            orders[productId] = {
                ...temp,
                numberOfPurchases: temp.numberOfPurchases,
            };
        } else {
            orders[productId] = {
                numberOfPurchases: 1,
                ...order.product,
            };
        }
    });
    const keysInOrders = Object.keys(orders);
    const productsPurchased = keysInOrders.map((key) => {
        return orders[key];
    });

    return mergeSort(productsPurchased);
};

export default function MainUserScreen() {
    const navigation = useNavigation();
    const accessToken = useSelector((state) => state.user.token.refreshToken);
    if (!accessToken) {
        navigation.navigate("LogIn");
        return <View></View>;
    } else {
        const personalInfo = useSelector((state) => state.user.info);
        useEffect(() => {
            dispatch(getPersonalInfo(accessToken));
            dispatch(getLikedProducts(accessToken));
        }, []);
        const dispatch = useDispatch();
        const likedProducts = useSelector(
            (state) => state.product.likedProducts
        );
        useEffect(() => {
            dispatch(getInfoOrder(accessToken));
        }, []);
        const infoOrders = useSelector((state) => state.product.infoOrders);
        console.log(infoOrders);

        let mostNumberOfPurchases = [];
        if (infoOrders.orders.deliveredProducts.length > 0) {
            mostNumberOfPurchases = handleHorizontalProductList(
                infoOrders.orders.deliveredProducts
            );
        }
        return (
            <SafeAreaView style={{ height: "100%" }}>
                <BottomNavigator height={90} currentActive={"User"} />
                <ScrollView>
                    <HeaderUser username={personalInfo?.username} />
                    <SeparateView />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("BillStatus", {
                                activePage: 1,
                            });
                        }}
                    >
                        <UserOptionTag
                            sourceIcon={record}
                            title={"????n mua"}
                            description={"Xem l???ch s??? mua h??ng"}
                        />
                    </TouchableOpacity>
                    <PurchaseStatus
                        deletedOrders={infoOrders.orders.deletedOrders}
                        deliveringOrders={infoOrders.orders.deliveringOrders}
                        waitingForDeliveringProducts={
                            infoOrders.orders.waitingForDeliveringProducts
                        }
                        deliveredProducts={infoOrders.orders.deliveredProducts}
                    />
                    <SeparateView />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("BuyAgain");
                        }}
                    >
                        <UserOptionTag
                            sourceIcon={bagIcon}
                            title={"Mua l???i"}
                            description={"Xem th??m s???n ph???m"}
                        />
                    </TouchableOpacity>
                    <HorizontalProductList
                        mostNumberOfPurchases={mostNumberOfPurchases}
                    />
                    <SeparateView />
                    {personalInfo.shop ? (
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("Shop");
                                }}
                            >
                                <UserOptionTag
                                    sourceIcon={store}
                                    highlight={true}
                                    title={"C???a h??ng c???a b???n"}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("ProductManager");
                                }}
                            >
                                <UserOptionTag
                                    sourceIcon={require("../../assets/icon/manage.png")}
                                    highlight={true}
                                    title={"Qu???n l?? s???n ph???m"}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("orderManager");
                                }}
                            >
                                <UserOptionTag
                                    sourceIcon={require("../../assets/icon/orderManagement.png")}
                                    highlight={true}
                                    title={"Qu???n l?? ????n h??ng"}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("RegisterSeller");
                            }}
                        >
                            <UserOptionTag
                                sourceIcon={store}
                                highlight={true}
                                title={"B???t ?????u b??n"}
                                description={"????ng k?? mi???n ph??"}
                            />
                        </TouchableOpacity>
                    )}
                    <SeparateView />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("LikedProduct");
                        }}
                    >
                        <UserOptionTag
                            sourceIcon={heartIcon}
                            title={"???? th??ch"}
                            description={`${likedProducts.data.length} Like`}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("RecentlyView");
                        }}
                    >
                        <UserOptionTag
                            sourceIcon={clockIcon}
                            title={"???? xem g???n ????y"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("MyReview");
                        }}
                    >
                        <UserOptionTag
                            sourceIcon={starIcon}
                            title={"????nh gi?? c???a t??i"}
                        />
                    </TouchableOpacity>
                    <SeparateView />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("EditInfo");
                        }}
                    >
                        <UserOptionTag
                            sourceIcon={profileIcon}
                            title={"Thi???t l???p t??i kho???n"}
                        />
                    </TouchableOpacity>
                    <View style={{ height: 50 }} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
