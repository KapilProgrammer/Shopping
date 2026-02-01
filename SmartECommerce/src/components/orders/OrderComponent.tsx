import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppText from '../texts/AppText'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colers'
import { fetchUserOrders } from '../../config/dataServices'

const OrderComponent = () => {

    const [orderList,setOrderList] = useState([])

    const getOrder = async() => {
        const response = await fetchUserOrders()
        setOrderList(response)
    }

    useEffect(() => {
        getOrder()
    },[])

    return (
        <View>
            <View style={styles.component}>
                <View style={styles.orderDetail}>
                    <AppText>ORDER DETAILS :</AppText>
                </View>
                <View style={styles.horizontalBar}></View>
                <View style={styles.bill}>
                    <AppText>TOTAL PRICE: $150</AppText>
                    <AppText>125.05</AppText>
                </View>
                <View style={styles.bill}>
                    <AppText>DATE: 2025-01-01</AppText>
                    <AppText>2025-01-01</AppText>
                </View>
            </View>
        </View>
    )
}

export default OrderComponent

const styles = StyleSheet.create({
    component: {
        width: "100%",
        height: s(100),
        flexDirection: "column",
        padding: s(12),
        borderWidth:s(1),
        borderColor:AppColor.blueGrey,
    },
    bill:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:s(4)
    },
    orderDetail:{
        paddingBottom:s(3)
    },
    horizontalBar:{
        height:s(1.5),
        width:"100%",
        backgroundColor:AppColor.redColor,
        marginBottom:s(4)
    }
})