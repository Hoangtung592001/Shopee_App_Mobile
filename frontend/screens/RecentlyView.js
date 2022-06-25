import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import Header from "../components/notiComponents/Header";
import { FlatList } from "react-native-gesture-handler";
import RecommendItem from "../components/homeComponents/RecommendItem";
import { getRecentVisitedProduct } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
export default function RecentlyView() {
  const accessToken = useSelector((state) => state.user.token.refreshToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecentVisitedProduct(accessToken));
  }, []);
  const recentVisitedProducts = useSelector(
    (state) => state.product.recentVisitedProducts.data
  );
  const listData = [
    {
      id: 1,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
    {
      id: 2,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
    {
      id: 3,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 170,
    },
    {
      id: 4,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
    {
      id: 5,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
    {
      id: 6,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
    {
      id: 7,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
    {
      id: 8,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
    {
      id: 9,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
    {
      id: 10,
      sourceIcon: require("../assets/icon/ao123.png"),
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantitySold: 1700,
    },
  ];
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Đã xem gần đây"} canBack={true} />
      <FlatList
        data={recentVisitedProducts}
        renderItem={({ item }) => (
          <RecommendItem recommendItem={item} containRating={false} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
