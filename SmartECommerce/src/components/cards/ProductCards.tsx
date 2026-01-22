import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colers'

const ProductCards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainser}>
        <Image />
      </View>
    </View>
  )
}

export default ProductCards

const styles = StyleSheet.create({
    container:{
        width: s(160),
        height: vs(190),
        backgroundColor: AppColor.white,
        borderRadius: s(10),

    },
    imageContainser:{
        overflow:"hidden",
        borderTopLeftRadius:s(10),
        borderTopRightRadius:s(10),
        height: vs(130),
        width: "100%"
    }
})