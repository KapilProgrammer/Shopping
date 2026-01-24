import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import { AppFont } from '../../styles/fonts'
import ProductCards from '../../components/cards/ProductCards'
import { products } from '../../data/products'
import { s, vs } from 'react-native-size-matters'

const HomeScreen = () => {
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
          onAddToCartPress={() => { }}
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