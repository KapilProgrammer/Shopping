import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../texts/AppText'
import { AppColor } from '../../styles/colers'
import { AppFont } from '../../styles/fonts'
import { AntDesign, FontAwesome } from "@expo/vector-icons"

interface CartItemProps {
    title: string,
    price: string | number,
    imageURL: string,
    qty: number,
    onDeletePress: () => void,
    onIncressPress: () => void,
    onReducePress: () => void
}

const CartItem: FC<CartItemProps> = ({
    title,
    price,
    imageURL,
    qty,
    onDeletePress,
    onIncressPress,
    onReducePress
}) => {
    return (
        <View style={styles.containser}>
            {/* Image Containser */}
            <View style={styles.ImageContainser}>
                <Image
                    source={{ uri: imageURL }}
                    style={styles.image}
                />
            </View>
            {/* Detail Containser */}
            <View style={styles.detailContainer}>
                <AppText style={styles.text}>
                    {title}
                </AppText>
                <AppText style={styles.textPrice}>{price}</AppText>

                <View style={styles.qtyContainer}>
                    <Pressable onPress={onIncressPress} style={styles.iconButton}>
                        <FontAwesome name='plus' size={s(10)} color={AppColor.primaryColor} />
                    </Pressable>
                    <AppText style={styles.textQty}>{qty}</AppText>
                    <Pressable onPress={onReducePress} style={styles.iconButton}>
                        <FontAwesome name='minus' size={s(10)} color={AppColor.primaryColor} />
                    </Pressable>
                </View>
            </View>
            {/* Deleter Button Containser */}
            <View style={styles.deleteContainer}>
                <Pressable style={styles.deleteButton} onPress={onDeletePress}>
                    <AntDesign name='delete' size={s(14)} color={AppColor.redColor} />
                    <AppText style={styles.deleteText}>
                        Delete
                    </AppText>
                </Pressable>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    containser: {
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 1,
        paddingBottom: vs(4),
        borderColor: AppColor.blueGrey
    },
    ImageContainser: {
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center"
    },
    detailContainer: {
        flex: 3.5,
    },
    deleteContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingEnd: s(12)
    },
    image: {
        height: s(80),
        width: s(80),
        borderRadius: s(5)
    },
    text: {
        fontSize: s(14),
        color: AppColor.primaryColor,
        fontFamily: AppFont.Medium,
        marginTop: vs(5)
    },
    textPrice: {
        fontSize: s(16),
        color: AppColor.primaryColor,
        fontFamily: AppFont.Bold,
        marginVertical: vs(5)
    },
    deleteText: {
        marginLeft: 7,
        fontFamily: AppFont.Medium,
        color: AppColor.medGrey,
        fontSize: s(12),
        marginTop: 3
    },
    deleteButton: {
        flexDirection: "row",
        alignItems: "center"
    },
    qtyContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: s(5),
        borderRadius: s(30),
        borderWidth: s(1),
        borderColor: AppColor.blueGrey,
        width: s(80),
        paddingVertical: vs(5)
    },
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColor.lightGray,
        padding: s(5),
        height: s(20),
        width: s(20),
        borderRadius: s(10)
    },
    textQty: {
        flex: 1,
        textAlign: "center",
        color: AppColor.primaryColor
    }
})