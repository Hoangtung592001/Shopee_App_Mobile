import { SafeAreaView, FlatList, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/notiComponents/Header'
import styles from '../components/styles'
import Evaluation from '../components/productComponents/Evaluation'
import StarCategory from '../components/productComponents/StarCategory'
import {useState} from 'react'


export default function EvaluationScreen() {
    const [ratingData, setRatingData] = useState([
        {
            id: 1,
            stars: 5,
            numberOfVoting: 100,
            active: true,
        },
        {
            id: 2,
            stars: 4,
            numberOfVoting: 43,
            active: false,
        },
        {
            id: 3,
            stars: 3,
            numberOfVoting: 92,
            active: false,
        },
        {
            id: 4,
            stars: 2,
            numberOfVoting: 10,
            active: false,
        },
        {
            id: 5,
            stars: 1,
            numberOfVoting: 99,
            active: false,
        },
    ])

    const listData = [
        {
            id: 1,
            userIcon: require('../assets/icon/ao123.png'),
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
        {
            id: 2,
            userIcon: require('../assets/icon/ao123.png'),
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
        {
            id: 3,
            userIcon: require('../assets/icon/ao123.png'),
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
        {
            id: 4,
            userIcon: require('../assets/icon/ao123.png'),
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
        {
            id: 5,
            userIcon: require('../assets/icon/ao123.png'),
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
        {
            id: 6,
            userIcon: require('../assets/icon/ao123.png'),
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
        {
            id: 7,
            userIcon: require('../assets/icon/ao123.png'),
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
        {
            id: 8,
            userIcon: require('../assets/icon/ao123.png'),
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
    ]
  return (
    <SafeAreaView style = {styles.bg_white}>
        <ScrollView>
            <Header title = {"Đánh giá"} canBack = {true}/>
            <View style = {[styles.flex_row, styles.pb_10, styles.pt_10, styles.hr_bottom]}>
                {ratingData.map((item, index) => 
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress = {() => {
                       setRatingData(
                            ratingData.map((subItem, subIndex) => {
                                if (subIndex != index) {
                                    return {...subItem, active: false}
                                } else {
                                    return {...subItem, active: true}
                                }
                            })  
                       )
                    }}
                >     
                    <StarCategory rating = {item} key = {item.id}/>
                </TouchableOpacity>
                )}
            </View>
            {listData.map(item => <Evaluation evaluation = {item} key = {item.id}/>)}
        </ScrollView>
    </SafeAreaView>
  )
}