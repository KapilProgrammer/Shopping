import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import ProductCards from '../../components/cards/ProductCards'
import { s, vs } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/reducers/CartSlice'
import { getProductData } from '../../config/dataServices'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const [products,setProduct] = useState()

  const featchData = async () => {
    const data = await getProductData()
    setProduct(data);
  }

  useEffect(() => {
    featchData()
  },[])

  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCards
          imageURL={item.imageURL}
          price={item.price}
          title={item.title}
          onAddToCartPress={() => { dispatch(addItemToCart(item)) }}
        />}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10)
        }}
        contentContainerStyle={{
          paddingHorizontal: s(10)
        }}
      />
    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})