import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../../components/texts/AppText'
import { AppFont } from '../../styles/fonts'
import { AppColor } from '../../styles/colers'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

const EmptyCart = () => {
    const {t} = useTranslation()

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
                {t("empty_cart_title")}
            </AppText>
            <AppText style={styles.subtitle}>
                {t("empty_cart_subtitle")}
            </AppText>

            <AppButton title={t("start_shopping")}
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