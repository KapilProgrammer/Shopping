import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../texts/AppText'
import { AppColor } from '../../styles/colers'
import { shippingFee, taxes } from '../../constants/constants'
import { useTranslation } from 'react-i18next'

interface TotalViewProps {
    itemsPrice: number;
    orderTotal: number
}

const TotalView: FC<TotalViewProps> = ({ itemsPrice, orderTotal }) => {
    return (
        <View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Items Price:</AppText>
                <AppText style={styles.textPrice}>$ {itemsPrice}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Taxes:</AppText>
                <AppText style={styles.textPrice}>$ {taxes}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Shipping Fee:</AppText>
                <AppText style={styles.textPrice}>$ {shippingFee}</AppText>
            </View>
            <View style={styles.seprater} />
            <View style={styles.row}>
                <AppText style={styles.textTitle}>Total Order:</AppText>
                <AppText style={styles.textPrice}>$ {orderTotal}</AppText>
            </View>
        </View>
    )
}

export default TotalView

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vs(10)
    },
    textTitle: {
        fontSize: s(16),
        flex: 1
    },
    textPrice: {
        fontSize: s(16),
        color: AppColor.primaryColor
    },
    seprater: {
        height: 1,
        width: "100%",
        backgroundColor: AppColor.blueGrey,
        marginVertical: vs(5)
    }
})