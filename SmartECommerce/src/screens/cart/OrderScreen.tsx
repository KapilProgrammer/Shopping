import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderComponent from '../../components/orders/OrderComponent'
import AppText from '../../components/texts/AppText'
import { s } from 'react-native-size-matters'
import AppSafeView from '../../components/views/AppSafeView'

const OrderScreen = () => {
  return (
    <AppSafeView>
    <View style={styles.orderDetail}>
       <OrderComponent />
    </View>
    </AppSafeView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    orderDetail:{
        marginHorizontal:s(8),
        marginTop:s(7)
    }
})