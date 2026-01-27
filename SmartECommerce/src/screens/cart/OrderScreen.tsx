import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderComponent from '../../components/orders/OrderComponent'
import AppText from '../../components/texts/AppText'
import { s } from 'react-native-size-matters'

const OrderScreen = () => {
  return (
    <View style={styles.orderDetail}>
       <OrderComponent />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    orderDetail:{
        marginHorizontal:s(8),
        marginTop:s(7)
    }
})