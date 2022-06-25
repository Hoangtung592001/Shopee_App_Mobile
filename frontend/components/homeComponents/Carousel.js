import {
    View,
    Text,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import styles from "../styles";

export default function Carousel(props) {
    const { width } = Dimensions.get("window");
    const height = props.listData == null ? width * 0.3 : width * 1.2;
    const productImages = props.listData;
    const images = [
        {
            id: 1,
            sourceIcon:
                "https://mgg.vn/wp-content/uploads/2018/11/banner-shopee-sieu-sale-1024x589.png",
        },
        {
            id: 2,
            sourceIcon:
                "https://mgg.vn/wp-content/uploads/2018/11/banner-shopee-sieu-sale-1024x589.png",
        },
        {
            id: 3,
            sourceIcon:
                "https://mgg.vn/wp-content/uploads/2018/11/banner-shopee-sieu-sale-1024x589.png",
        },
    ];
    // const [images, setImages] = useState(
    //     [
    //         require('../../assets/icon/carousel_1.png'),
    //         require('../../assets/icon/carousel_2.png'),
    //         require('../../assets/icon/carousel_3.png')
    //     ]
    // )

    const [active, setActive] = useState(0);
    const [value, setValue] = useState(value);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
        );
        /*
      nativeEvent là sự kiện của react native trả ra 1 object các thuộc tính của màn hình
      contentInset: 1 
      */
        if (slide !== active) {
            setActive(slide);
        }
    };

    const renderItem = ({ item, index }) => (
        <Image
            key={index}
            source={{ uri: item.sourceIcon }}
            style={
                props.listData == null
                    ? { width, height, resizeMode: "cover" }
                    : { width, height: 500 }
            }
        />
    );
    var listData = props.listData == null ? images : props.listData;
    return (
        <SafeAreaView style={{ width, height }}>
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                data={listData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View
                style={{
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 0,
                    alignSelf: "center",
                }}
            >
                {listData.map((image, index, key) => (
                    <Text
                        key={index}
                        style={index == active ? styles.activeDot : styles.dot}
                    >
                        ●
                    </Text>
                ))}
            </View>
        </SafeAreaView>
    );

    return null;
}
