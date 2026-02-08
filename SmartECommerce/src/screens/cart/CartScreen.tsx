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
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/Store'
import { addItemToCart, removeItemFromCart, removeProductFromCart } from '../../store/reducers/CartSlice'
import { shippingFee, taxes } from '../../constants/constants'
import { useTranslation } from 'react-i18next'
// import { RootState } from '@reduxjs/toolkit/query'

const CartScreen = () => {
  const navigate = useNavigation()
  const { items } = useSelector((state: RootState) => state.cartSlice)
  const disPatch = useDispatch()
  const totalProductPricesSum = items.reduce((acc, item) => acc + item.sum, 0)
  const orderTotal = totalProductPricesSum + shippingFee + taxes;
  const {t} = useTranslation()

  // console.log(items);

  return (
    <AppSafeView>
      <HomeHeader />
      {
        items.length > 0 ?
          <View style={{ paddingHorizontal: sharedStylesHorizantel, flex: 1 }}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return <CartItem
                  {...item} price={item.sum}
                  onReducePress={() => disPatch(removeItemFromCart(item))}
                  onDeletePress={() => disPatch(removeProductFromCart(item))}
                  onIncressPress={() => disPatch(addItemToCart(item))}
                />
              }}
              showsVerticalScrollIndicator={false}
            />
            <TotalView itemsPrice={totalProductPricesSum} orderTotal={orderTotal} />
            <AppButton onPress={() => navigate.navigate("ChechOutScreen")} title={t("cart_continue_button")} />
          </View>

          :

          <EmptyCart />

      }

    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})