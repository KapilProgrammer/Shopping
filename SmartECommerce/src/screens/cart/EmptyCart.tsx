import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../../components/texts/AppText'
import { AppFont } from '../../styles/fonts'
import { AppColor } from '../../styles/colers'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const EmptyCart = () => {

    const navigate = useNavigation()
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name='shopping-outline'
                size={s(100)}
                color={AppColor.primaryColor}
                style={styles.icon}
            />
            <AppText style={styles.title}>
                Your Cart Is Empty
            </AppText>
            <AppText style={styles.subtitle}>
                Browse our prouduct and find somthing you want to buy
            </AppText>

            <AppButton title='Start Shopping'
                style={styles.button}
                onPress={() => navigate.navigate("Home")} />
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: s(20)
    },
    title: {
        fontSize: s(20),
        fontFamily: AppFont.Bold,
        color: AppColor.primaryColor,
        marginBottom: vs(10),
    },
    subtitle: {
        fontSize: s(16),
        fontFamily: AppFont.Medium,
        textAlign: "center",
        color: AppColor.medGrey,
        marginBottom: vs(20)
    },
    button: {
        width: "80%"
    },
    icon: {
        marginBottom: vs(20),
        opacity: .9
    }
})