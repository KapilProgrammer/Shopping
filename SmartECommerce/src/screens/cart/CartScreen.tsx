import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import EmptyCart from './EmptyCart'
import CartItem from '../../components/cart/CartItem'
import TotalView from '../../components/cart/TotalView'
import { products } from '../../data/products'
import { sharedStylesHorizantel } from '../../styles/shairedStyles'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
  const navigate = useNavigation()
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <View style={{ paddingHorizontal: sharedStylesHorizantel,flex:1 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <CartItem {...item} />
          }}
          showsVerticalScrollIndicator={false}
        />
        <TotalView itemsPrice={5000} orderTotal={2025} />
        <AppButton onPress={() => navigate.navigate("ChechOutScreen")} title='Continue' />
      </View>
    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})