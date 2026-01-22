import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../styles/colers'
import { vs } from 'react-native-size-matters'
import { IMAGES } from '../../constants/images-paths'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo}/>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container:{
    backgroundColor:AppColor.primaryColor,
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:vs(10)
  },
  logo:{
    height:vs(40),
    width:vs(40),
    tintColor:AppColor.white
  }
})