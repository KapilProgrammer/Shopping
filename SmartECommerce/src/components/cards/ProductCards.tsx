import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colers'
import AppText from '../texts/AppText'
import { AppFont } from '../../styles/fonts'
import { Ionicons } from '@expo/vector-icons'
import { commonStyle } from '../../styles/shairedStyles'


interface ProductCardsProps {
  onAddToCartPress: () => void;
  title: string,
  price: number,
  imageURL: string
}

const ProductCards: FC<ProductCardsProps> = ({ onAddToCartPress, imageURL, title, price }) => {
  return (
    <View style={styles.container}>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCartPress}>
        <Ionicons name='cart' size={s(15)} color={AppColor.white} />
      </TouchableOpacity>

      {/* Image UI Section */}
      {/* Details */}
      <View style={styles.detailContainser}>
        <View style={styles.imageContainser}>
          <Image style={styles.image} source={{ uri: imageURL }} />
        </View>
        <AppText style={styles.titleText}>
          {title}
        </AppText>
        <AppText style={styles.priceTitle}>
          {price} $
        </AppText>
      </View>
    </View>
  )
}

export default ProductCards

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColor.white,
    borderRadius: s(10),
    ...commonStyle.shadow
  },
  imageContainser: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    height: vs(130),
    width: "100%"
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
  detailContainser: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10)
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFont.Medium,
    color: AppColor.primaryColor
  },
  priceTitle: {
    fontSize: s(14),
    fontFamily: AppFont.Bold,
    color: AppColor.primaryColor,
    marginTop: vs(7)
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: s(5),
    top: s(5),
    borderRadius: s(14),
    backgroundColor: AppColor.primaryColor,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})