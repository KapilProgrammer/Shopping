import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import { AppFont } from '../../styles/fonts'
import ProductCards from '../../components/cards/ProductCards'

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <ProductCards />
    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})